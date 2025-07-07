import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';
export const appwriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectID: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    platform: "com.abdullah.foodapp",
    databaseID:"686a695b0039e2907c7c",
    collectionID: "686a6997001affc39600",

} 
export const client = new Client();
client.setEndpoint(appwriteConfig.endpoint!).setProject(appwriteConfig.projectID!)
.setPlatform(appwriteConfig.platform)

export const account = new Account(client);
export const database = new Databases(client);
const avatar = new Avatars(client)

interface CreateUserParams{
    name:string,
    password:string,
    email:string
}

export const createUser= async ({email, password,name}:CreateUserParams)=>{
    try{
        const newAccount = await account.create(ID.unique(), email, password, name)
        if (!newAccount) throw Error
        await signIn({email,password});
        const avatarUrl = avatar.getInitialsURL(name)
        const newUser= await database.createDocument(appwriteConfig.databaseID,appwriteConfig.collectionID,ID.unique(),
        {
            email,
            name,
            password,
            avatar:avatarUrl,
            accountID : newAccount.$id
        });
        return newUser;
        }catch(e){throw new Error(e as string)}
}

interface SignInParams{
    email:string,
    password:string
}

export const signIn = async ({email,password}:SignInParams) => {
    try{
        const session = await account.createEmailPasswordSession(email,password)
    }catch(e){throw new Error(e as string)}
}
export const getUser = async () =>{
    try{
        const currentAccount = await account.get()
        if(!currentAccount) throw Error
        const currentUser = await database.listDocuments(appwriteConfig.databaseID,appwriteConfig.collectionID,
            [Query.equal('accountID',currentAccount.$id)]
        )
        if (!currentUser) throw Error
        return currentUser.documents[0];
    }catch(e){throw new Error(e as string)}
}