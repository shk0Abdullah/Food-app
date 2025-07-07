import { Redirect, Slot } from "expo-router";

export default function _Layout(){
    const isAuthenticated: any = false;
    if (!isAuthenticated) return <Redirect href="/signIn"/>
    return <Slot/>
}