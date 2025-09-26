// import React from "react";
// import { Text, View, Button, Image, StyleSheet } from "react-native";

// export default function FilterPizza() {
//     return (
//         <View>
//             <Text> Olá</Text>
//         </View>
//     )
// }

import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FilterPizza({ search, setSearch }) {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                    <TextInput
                    style={styles.input}
                    placeholder="Buscar pizza..."
                    value={search}
                    onChangeText={setSearch}
                    placeholderTextColor="#888"
                    />  

                  <Ionicons name="search" size={20} color="#888" style={styles.icon} />  

            </View>

            {/* Botões de filtro
            <View style={styles.filters}>
                <TouchableOpacity style={styles.filterBtn}>
                    <Text style={styles.filterText}>Todos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterBtn}>
                    <Text style={styles.filterText}>Salgadas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterBtn}>
                    <Text style={styles.filterText}>Doces</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "160",
        backgroundColor: '#e6d6b8'
        // paddingHorizontal: 16,
        // marginBottom: 16,
    },
    searchContainer: {
        width: "80%",
        height: 45,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "red",//"#f5f3e7",
        marginTop: 20,
        marginLeft: 30,
    },
    input: {
        width: "82%",
        height: 45,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f5f3e7",
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: "#c5a15c",
        color: "#6b2e2e",
        // paddingHorizontal: 100,
        // paddingVertical: 60,
        // shadowColor: "#6b2e2e",
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        // elevation: 2,
    },
    icon: {
        // marginRight: 8,
    },
    filters: {
        // flexDirection: "row",
        // justifyContent: "space-between",
        // marginTop: 12,
    },
    filterBtn: {
        // backgroundColor: "#e63946", // cor principal do site
        // paddingVertical: 8,
        // paddingHorizontal: 16,
        // borderRadius: 20,
    },
    filterText: {
        // color: "#fff",
        // fontSize: 14,
        // fontWeight: "bold",
    },
});