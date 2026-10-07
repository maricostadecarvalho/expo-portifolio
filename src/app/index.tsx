import { Button, Image, Linking, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mariana Costa De Carvalho</Text>

      <Image
        source={{
          uri: 'https://raw.githubusercontent.com/maricostadecarvalho/portfolio-mari/refs/heads/main/mariana.png'
        }}
        style={styles.imagem}
      />

      <Text style={styles.subtitulo}>
        Cursando Ensino Médio e Desenvolvimento de Sistemas
      </Text>

      <Button 
      title='GitHub'
      onPress={() => Linking.openURL('https://github.com/maricostadecarvalho')}
      color='#f06aab'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#e39fba',
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },

  imagem: {
    width: 300,
    height: 400,
    marginBottom: 20,
    borderRadius: 1000,
  },

  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
  },
});
