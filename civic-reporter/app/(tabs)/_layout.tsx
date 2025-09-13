import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/colors';
import { Fonts } from '@/constants/typography';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.text,
        tabBarInactiveTintColor: Colors.muted,
        tabBarStyle: {
          backgroundColor: Colors.secondary,
          borderTopWidth: 0,
          height: 80,
          paddingBottom: 10,
          paddingTop: 10,
          shadowColor: Colors.primary,
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
          fontFamily: Fonts.regular,
        },
      }}
    >
     
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />

      
      <Tabs.Screen
        name="points"
        options={{
          title: 'Points',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy-outline" color={color} size={size} />
          ),
        }}
      />

     
      <Tabs.Screen
        name="new-report"
        options={{
          title: 'Reports',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
       name="notifications"
       options={{
        title: 'Notifications',
        tabBarIcon: ({ color, size }) => (
        <Ionicons name="notifications-outline" color={color} size={size} />
      ),
       }}
       />

    </Tabs>
  );
}
