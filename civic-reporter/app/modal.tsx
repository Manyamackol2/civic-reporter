import { useRouter } from 'expo-router';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { ThemedText } from '../components/themed-text';
import { ThemedView } from '../components/themed-view';

export default function ModalScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">This is a modal</ThemedText>

      <TouchableOpacity
        style={styles.link}
        onPress={() => router.replace('../tabs/home')} 
      >
        <ThemedText type="link">Go to home screen</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  link: { marginTop: 20, paddingVertical: 10 },
});
