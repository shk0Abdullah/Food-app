import { offers } from "@/constants";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./globals.css";
export default function Index() {
  return (
    <SafeAreaView>
      <FlatList data= {offers} renderItem= {({item,index})=>{
        
        return( <View>
          <Pressable className = "bg-amber-600 my-3 h-48 rounded-xl">
            <Text >{item.title}</Text>
          </Pressable>
        </View>
        
  )}
      }/>
    </SafeAreaView>
  );
}