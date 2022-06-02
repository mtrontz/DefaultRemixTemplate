import { Form, redirect } from "remix"
import type { ActionFunction, LoaderFunction } from "remix"
import { authenticator } from "~/services/auth.server";


// We need to export an action function, here we will use the
// `authenticator.authenticate method`
export let action: ActionFunction = async ({ request }) => {
    // we call the method with the name of the strategy we want to use and the
    // request object, optionally we pass an object with the URLs we want the user
    // to be redirected to after a success or a failure
    return await authenticator.authenticate("user-pass", request, {
      successRedirect: "/",
      failureRedirect: "/login",
    });
  };
  
  // Also, we can export a loader function where we check if the user is
  // authenticated with `authenticator.isAuthenticated` and redirect to the
  // dashboard if it is or return null if it's not
  export let loader: LoaderFunction = async ({ request }) => {
    let url = request.url;
    // If the user is already authenticated redirect to /dashboard directly
    return await authenticator.isAuthenticated(request, {
      successRedirect: "/",
    });
  };

// Finally, we create our UI with the form doing a POST and the inputs with the
// names we are going to use in the strategy;

export default function Login() {
  return (
    <Form method="post">
      <label htmlFor="email">Email</label>
      <input type="email" name="email" required />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        autoComplete="current-password"
        required
      />
      <br />
      <button>Sign In</button>
    </Form>
  );
}

