// import React, { useEffect, useState } from "react";
// import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
// import { useCart } from "../context/CartContext";
// import FilterPizza from "./FilterPizza";

// const Menu = () => {
//   const [produtos, setProdutos] = useState([]);
//   const [search, setSearch] = useState("");
//   const { addToCart, removeFromCart, getQuantity } = useCart();

//   useEffect(() => {
//     const fetchProdutos = async () => {
//       try {
//         const res = await fetch("http://10.0.2.2:3000/produtos"); // ajuste pro seu backend
//         const data = await res.json();
//         setProdutos(data);
//       } catch (err) {
//         console.error("Erro ao carregar produtos:", err);
//       }
//     };
//     fetchProdutos();
//   }, []);

//   const filtrados = produtos.filter((p) =>
//     p.nome.toLowerCase().includes(search.toLowerCase())
//   );

//   const renderItem = ({ item }) => {
//     const qtd = getQuantity(item.id);
//     return (
//       <View style={styles.card}>
//         <Image source={{ uri: item.imagem }} style={styles.image} />
//         <View style={styles.info}>
//           <Text style={styles.nome}>{item.nome}</Text>
//           <Text style={styles.desc}>{item.descricao}</Text>
//           <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>

//           <View style={styles.controls}>
//             <TouchableOpacity onPress={() => removeFromCart(item)} style={styles.btn}>
//               <Text style={styles.btnText}>-</Text>
//             </TouchableOpacity>

//             <Text style={styles.qtd}>{qtd}</Text>

//             <TouchableOpacity onPress={() => addToCart(item)} style={styles.btn}>
//               <Text style={styles.btnText}>+</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
//       <FilterPizza search={search} setSearch={setSearch} />
//       <FlatList
//         data={filtrados}
//         keyExtractor={(item) => String(item.id)}
//         renderItem={renderItem}
//         contentContainerStyle={{ paddingBottom: 20 }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     borderRadius: 16,
//     marginVertical: 8,
//     marginHorizontal: 12,
//     padding: 10,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   image: {
//     width: 90,
//     height: 90,
//     borderRadius: 12,
//   },
//   info: {
//     flex: 1,
//     marginLeft: 10,
//     justifyContent: "space-between",
//   },
//   nome: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   desc: {
//     fontSize: 14,
//     color: "#666",
//     marginVertical: 4,
//   },
//   preco: {
//     fontSize: 15,
//     fontWeight: "600",
//     color: "#e63946",
//   },
//   controls: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 6,
//   },
//   btn: {
//     backgroundColor: "#e63946",
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     paddingVertical: 4,
//   },
//   btnText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   qtd: {
//     fontSize: 16,
//     marginHorizontal: 12,
//   },
// });

// export default Menu;
