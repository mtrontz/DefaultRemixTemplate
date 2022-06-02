import React, { useState, useCallback, useEffect } from "react";
import { redirect, json } from "remix";
import {encrypt, decrypt, randomUUID, randomInt} from "~/services/encryption.server";
import faker from "faker";

enum Role {
    Admin = "Admin",
    User = "User",
    Visitor = "Visitor"
};
type Roles = Array<Role>;
const roles: Roles = Object.values(Role);

type UserFunction = (data: FormProps, user?: User) => Promise<User|undefined>;
export type User = {
    id?: string;
    email?: string;
    hashedPassword?: string;
    firstName?: string;
    lastName?: string;
    number?: string;
    roles?: string[];
};

let users: Array<User> = [];

interface FormProps {
    email: string; 
    password: string;
    redirect?: {
        success?: string;
        failure?: string;
    }
}
export const findOrCreateUser: UserFunction = async (data: FormProps) => {
    if (!data || data.email === null) return await createNewUser();

    let user = getUser(data);
    if (user !== undefined) return user
    return await createNewUser();
};



let getUser: UserFunction = async (data) => {
    if (data && typeof data.email === "string") {
        let user: User | undefined = await getUserbyEmail(data).then(async (user) => {
            return await verifyUser(data, user)
        }); 
        return user
    }
    return undefined
};

let getUserbyEmail: UserFunction = async (data) => {
    let user = users.find((user, index) => {
        if (data && data.email === user.email as string && data.email === users[index]?.email as string) return user as User;
        throw new Error(`${data?.email}: This email does not exist or is not defined. Please try again!`);
    }, [users]);
    return user as User
};

let verifyUser: UserFunction = async (data, user) => {
    if (data && typeof data.password === "string") {
        let decryptedPassword = useCallback(async (password: string) => await decrypt(password), [data]);

        let hashedPassword = user?.hashedPassword as string;
        let password = await decryptedPassword(hashedPassword);
        if (data.password === password) return user as User
        return undefined
    }
}

const newUser = useCallback(async () => {
    let user = {
        id: await randomUUID(),
        email: faker.internet.email(),
        hashedPassword: await encrypt(faker.internet.password(8)),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        number: faker.phone.phoneNumber(),
        roles: roles.filter((value) => value === "Visitor")
    };
        return user as User;
    }, []);

let createNewUser = useCallback(async () => {
    let user = await newUser();
    users.push({
        id: user.id,
        email: user.email,
        hashedPassword: user.hashedPassword,
        firstName: user.firstName,
        lastName: user.lastName,
        number: user.number,
        roles: user.roles
    } as User);
    return user;
}, [])
    

// let createPassword = useCallback(async (text?: string) => {
//     if (!text || text === null) {
//         text = await randomUUID();
//         let hashedPassword = await encrypt(text)
//         return json({
// 
//         })
//     }
// }, []);