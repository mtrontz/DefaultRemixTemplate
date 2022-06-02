import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import { findOrCreateUser } from "~/models/user";
import type { User } from "~/models/user";
import { encrypt } from "~/services/encryption.server";
import { FormStrategy } from "remix-auth-form";
import invariant from "~/utils/tiny-invariant";

export let authenticator = new Authenticator<User>(sessionStorage);

authenticator.use(
    new FormStrategy<User>(async ({ form, context }) => {
      // Here you can use `form` to access and input values from the form.
      // and also use `context` to access more things from the server
      let email = form.get("email"); // or username... etc
      let password = form.get("password");
  
      // You can validate the inputs however you want
      invariant(typeof email === "string", "username must be a string");
      invariant(email.length > 0, "username must not be empty");
  
      invariant(typeof password === "string", "password must be a string");
      invariant(password.length > 0, "password must not be empty");
  
      // And if you have a password you should hash it
      let hashedPassword = await encrypt(password);
  
      // And finally, you can find, or create, the user
      let user = await findOrCreateUser({email, password}) as User;
      // let user = await login(email, password);
      // the type of this user must match the type you pass to the Authenticator
      // the strategy will automatically inherit the type if you instantiate
      // directly inside the `use` method

      // And return the user as the Authenticator expects it
      return user as User;
    }),
    // each strategy has a name and can be changed to use another one
    // same strategy multiple times, especially useful for the OAuth2 strategy.
    "user-pass"
  );