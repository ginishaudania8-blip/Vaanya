import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const PLACEHOLDER_CONFIG = {
  apiKey: 'placeholder',
  authDomain: 'placeholder.firebaseapp.com',
  projectId: 'placeholder',
  storageBucket: 'placeholder.appspot.com',
  messagingSenderId: '0',
  appId: '1:0:web:placeholder',
}

const PLACEHOLDER_VALUES = new Set([
  'your_api_key_here',
  'your_project.firebaseapp.com',
  'your_project_id',
  'your_project.appspot.com',
  'your_messaging_sender_id',
  'your_app_id',
])

const requiredEnvKeys = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID',
]

function isMissingOrPlaceholder(value) {
  if (value == null) return true
  const trimmed = String(value).trim()
  if (!trimmed) return true
  return PLACEHOLDER_VALUES.has(trimmed)
}

const envConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const hasValidConfig = requiredEnvKeys.every(
  (key) => !isMissingOrPlaceholder(import.meta.env[key]),
)

if (!hasValidConfig) {
  console.warn(
    'Firebase config missing — using placeholder values, real keys needed before Auth/Firestore features work',
  )
}

const app = initializeApp(hasValidConfig ? envConfig : PLACEHOLDER_CONFIG)

export const db = getFirestore(app)
export const auth = getAuth(app)
