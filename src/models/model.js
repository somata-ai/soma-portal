import * as tf from "@tensorflow/tfjs";
import { layerTypes } from "../utils";
/**
 * Write models as a function overhere.
 * Hardcode parameters as variables here for now and use.
 * These parameters will be passed later on as arguments.
 */

const csvUrl =
  "https://storage.googleapis.com/tfjs-examples/multivariate-linear-regression/data/boston-housing-train.csv";

const loadData = async () => {
  const csvDataset = tf.data.csv(csvUrl, {
    columnConfigs: {
      medv: {
        isLabel: true,
      },
    },
  });
  // Number of features is the number of column names minus one for the label
  // column.
  const numOfFeatures = (await csvDataset.columnNames()).length - 1;

  // Prepare the Dataset for training.
  const flattenedDataset = csvDataset
    .map(({ xs, ys }) => {
      // Convert xs(features) and ys(labels) from object form (keyed by column
      // name) to array form.
      return { xs: Object.values(xs), ys: Object.values(ys) };
    })
    .batch(10);
  console.log(flattenedDataset);

  return { flattenedDataset, numOfFeatures };
};

const setupModel = (numOfFeatures) => {

  const activation = "relu";
  const regularization = "l2";
  const problemType = "classification";
  const layers = [
    {
      neurons: 2,
      type: layerTypes.linear,
    },
    {
      neurons: 4,
      type: layerTypes.linear
    },
    {
      neurons: 40,
      type: layerTypes.linear
    },
    
    {
      neurons: 1,
      type: layerTypes.linear,
    },
  ];

  // Define the model.
  const model = tf.sequential();
  model.add(
    tf.layers.dense({
      inputShape: [numOfFeatures],
      activation: activation,
      units: 1,
    })
  );
  
  layers.forEach(layer => {
    model.add(
    tf.layers.dense({
      activation: activation,
      units: layer.neurons,
    })
  );
  }) 

   
  model.compile({
    optimizer: tf.train.sgd(0.000001),
    loss: "meanSquaredError",
  });


  return model;
};

export const myModel = async () => {
  
  const { flattenedDataset, numOfFeatures } = await loadData();
  const model = setupModel(numOfFeatures);

  console.log(model.toJSON())

  // Fit the model using the prepared Dataset
  return model.fitDataset(flattenedDataset, {
    epochs: 10,
    callbacks: {
      onEpochEnd: async (epoch, logs) => {
        console.log(epoch, logs.loss);
      },
    },
  });

  console.log("done");
};

// This function is called on clicking the start button.
export const testTensorFlow = () => {
  const t = tf.tensor2d([
    [1, 2, 3],
    [4, 5, 6],
  ]);
  console.log(t.shape.toString());
};
