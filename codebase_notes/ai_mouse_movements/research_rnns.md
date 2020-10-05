# Researching Similar Approaches and RNNs
## [Mouse Tracking Predictor](https://github.com/abhijitmajumdar/Mouse_tracking_predictor)
* A dataset is initially created by recording mouse movements within the drawing area. These data points with (x,y) coordinates are normalized before training LSTM network. The network expects 16 (defined by 'timesteps') consecutive samples to predict the next (x,y) coordinate of a point. To train such a network, random index from the dataset is selected and the following 16 data-points are fed to the network as input. The 17th data-point is used as the ground truth (labeled) output, which is compared to the predicted output of the network to compute the error which is then used in back-propagation to update the weights in the network.
* __The prediction mode works iteratively. The last 16 user inputs are used to predict a new point. In the next iteration this new point along with the last 15 points are used to predict another point. This process continues 128(defined by 'n_predictions') times. Hence, initially the predictions tend to follow the direction of the mouse, but then diverge into some crazy shapes!__

```
# Graph the model. Edit the model here if desired
timesteps = 16

def generate_model(load_weights=False):
    global model
    model = Sequential()
    model.add(LSTM(64, return_sequences=False, input_shape=(2,timesteps)))
    #model.add(LSTM(32, return_sequences=True))
    #model.add(LSTM(32))
    model.add(Dense(2, activation='relu'))
    model.compile(loss='mse', optimizer='adam')
    if(load_weights==True): load_pretrained_weights()
    model_generated = True
```

---

# Questions
* [RNN: What is the use of return_sequences in LSTM layer in Keras Framework?](https://stackoverflow.com/questions/51376770/rnn-what-is-the-use-of-return-sequences-in-lstm-layer-in-keras-framework)
  * When the `return_sequences` argument is set to False (default), the network will only output `hn`, i.e. the hidden state at the final time step. Otherwise, the network will output the full sequence of hidden states, `[h1, h2, ..., hn]`.

---

# Resources
* [5 Types of LSTM Recurrent Neural Networks and What to Do With Them](https://blog.exxactcorp.com/5-types-lstm-recurrent-neural-network/)
* [How to select number of hidden layers and number of memory cells in an LSTM?](https://ai.stackexchange.com/questions/3156/how-to-select-number-of-hidden-layers-and-number-of-memory-cells-in-an-lstm)
* [Corrupt, sparse, irregular and ugly: Deep learning on time series](https://www.notion.so/Corrupt-sparse-irregular-and-ugly-Deep-learning-on-time-series-887b823df439417bb8428a3474d939b3)
