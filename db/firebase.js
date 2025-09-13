// Central Firebase configuration and initialization
// This file contains all Firebase setup that can be imported by any page

// Import Firebase modules
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  updateDoc, 
  deleteDoc, 
  onSnapshot,
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQbR2d4iSf0uNWkOJ8tVFPb1EhBkH-_GE",
  authDomain: "deee-9ab53.firebaseapp.com",
  projectId: "deee-9ab53",
  storageBucket: "deee-9ab53.firebasestorage.app",
  messagingSenderId: "848593925932",
  appId: "1:848593925932:web:e6b0b6b4f7a7d1a1d1a1a1"
};

// Initialize Firebase (idempotent - safe for incremental migration)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export Firebase services and utilities for use in other files
export {
  // Firebase app
  app,
  
  // Firebase services (pre-initialized instances)
  auth,
  db,
  storage,
  
  // Firebase service factory functions (for flexible usage)
  getAuth,
  getFirestore,
  getStorage,
  
  // Auth functions
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  
  // Firestore functions
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  updateDoc,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
  
  // Storage functions
  ref,
  uploadBytes,
  getDownloadURL
};