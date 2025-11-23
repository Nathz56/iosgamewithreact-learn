import { useRouter } from 'expo-router'
import React from 'react'
import { Image, View } from 'react-native'
import Button from './components/button'

export default function Index() {
  const router = useRouter()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={require('./assets/images/spongebobstart.jpg')}
        style={{ width: 118, height: 118, marginBottom: 25, resizeMode: 'contain' }}
      />

      <Button
        title="Start your adventure!"
        variant="primary"
        onPress={() => {
          console.log ('Button pressed!')
          router.push('/second' as any)
        }}
      />
    </View>
  )
}
