import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import Neuron from "./Neuron";
import styles from "../styles/layer.module.scss";

const addNeuron = (id, layers, updateLayers) => {
  const index = layers.findIndex((item) => item.id === id);
  const updatedLayers = [...layers];
  updatedLayers[index].neurons++;
  updateLayers(updatedLayers);
};

const removeNeuron = (id, layers, updateLayers) => {
  const index = layers.findIndex((item) => item.id === id);
  const updatedLayers = [...layers];
  updatedLayers[index].neurons--;
  updateLayers(updatedLayers);
};

const Layer = (props) => {
  return (
    <div className={styles.layer}>
      {[...Array(props.layer.neurons)].map((x) => {
        return <Neuron />;
      })}
      <div className={styles.buttonsContainer}>
        <IoIosAddCircleOutline
          className={styles.button}
          onClick={addNeuron.bind(
            this,
            props.layer.id,
            props.layers,
            props.updateLayers
          )}
        />
        <IoIosRemoveCircleOutline
          className={styles.button}
          onClick={removeNeuron.bind(
            this,
            props.layer.id,
            props.layers,
            props.updateLayers
          )}
        />
      </div>
    </div>
  );
};

export default Layer;
