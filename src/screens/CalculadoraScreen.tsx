import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {BotonCalc} from '../components/BotonCalc';

const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>1,500.00</Text>
      <Text style={styles.resultado}>1,500.00</Text>

      <View style={styles.fila}>
        {/* Boton */}
        <BotonCalc texto="C" color="#9B9B9" />
        <BotonCalc texto="+/-" color="#9B9B9" />
        <BotonCalc texto="%" color="#9B9B9" />
        <BotonCalc texto="&divide;" color="#FF9427" />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
