import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset, incrementByAmount, selectCounterValue } from '../store/counterSlice';

export default function CounterScreen() {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounterValue);

  return (
    <View style={styles.card}>
      <Text style={styles.counterText}>{counter}</Text>
      
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.btnDecrement]} onPress={() => dispatch(decrement())}>
          <Text style={styles.buttonText}>- Giảm</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.btnIncrement]} onPress={() => dispatch(increment())}>
          <Text style={styles.buttonText}>+ Tăng</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.buttonRow, { marginTop: 10 }]}>
        <TouchableOpacity style={[styles.button, styles.btnIncrement5]} onPress={() => dispatch(incrementByAmount(5))}>
          <Text style={styles.buttonText}>+ 5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.btnReset]} onPress={() => dispatch(reset())}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { 
    backgroundColor: '#f5f5f5', 
    padding: 20, 
    borderRadius: 10, 
    alignItems: 'center' 
  },
  counterText: { 
    fontSize: 48, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  buttonRow: { 
    flexDirection: 'row', 
    gap: 10 
  },
  button: { 
    paddingVertical: 12, 
    paddingHorizontal: 20, 
    borderRadius: 8 
  },
  btnIncrement: { 
    backgroundColor: '#007AFF' 
  },
  btnDecrement: { 
    backgroundColor: '#FF3B30' 
  },
  btnIncrement5: { 
    backgroundColor: '#34C759' 
  },
  btnReset: { 
    backgroundColor: '#8E8E93' 
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: '600' 
  },
});
