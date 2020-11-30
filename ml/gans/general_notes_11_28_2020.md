# General Notes about GANs
* Use smaller batch sizes when training GANs (< 64)
  * Introduces noise that makes it less likely for the discriminator to become too strong too quickly
* BN is good
* Avoid sparse gradients --> Use LeakyReLU?
* WGANs are more stable
* Wasserstein Distance is the distance between two probability distributions
  * Thinks: The energy required to transform one distribution to the shape of another distribution
  * Good for GANs because GANs want their predicted distribution to match the label real distribution
  * Why Wasserstein is better than JS or KL Divergence?
    * Smoother loss (no sudden jumps or discontinuities)
* WGAN-LP (Lipschitz penalty) better than WGAN-GP (gradient penalty)
* [Generative Adversarial Networks for Generation and Classification of Physical Rehabilitation Movement Episodes](https://arxiv.org/ftp/arxiv/papers/1812/1812.06307.pdf)'s RGAN (condition recurrent GAN) performs the best.
  * The RGAN is mad small:
    * Input is (M = 260,5)
    * Generator: LSTM(100) Adam
    * Discriminator: LSTM(100) SGD

## RGANs
* [REAL-VALUED (MEDICAL) TIME SERIES GENERATION WITH RECURRENT CONDITIONAL GANS](https://arxiv.org/pdf/1706.02633.pdf)
  * Section 3: MODELS: RECURRENT GAN AND RECURRENT CONDITIONAL GAN

```
D_loss_real = tf.reduce_mean(tf.nn.sigmoid_cross_entropy_with_logits(logits=D_logit_real, labels=tf.ones_like(D_logit_real)), 1)
D_loss_fake = tf.reduce_mean(tf.nn.sigmoid_cross_entropy_with_logits(logits=D_logit_fake, labels=tf.zeros_like(D_logit_fake)), 1)

D_loss = D_loss_real + D_loss_fake

G_loss = tf.reduce_mean(tf.nn.sigmoid_cross_entropy_with_logits(logits=D_logit_fake, labels=tf.ones_like(D_logit_fake)), 1)

return D_loss, G_loss
```
* Architecture
  * Generator: LSTM --> Dense(sequence_length) --> Reshape
  * Discriminator has a weird output dense layer?
  ```
  logits = tf.einsum('ijk,km', rnn_outputs, W_out_D) + b_out_D
  # rnn_outputs_flat = tf.reshape(rnn_outputs, [-1, hidden_units_d])
  # logits = tf.matmul(rnn_outputs_flat, W_out_D) + b_out_D
          output = tf.nn.sigmoid(logits)
  ```
    * Still LSTM --> Dense --> Sigmoid

## Resources
* [From GAN to WGAN](https://arxiv.org/pdf/1904.08994.pdf)
  * In depth math perspective of GANs v. WGANs
* Code examples
  * https://keras.io/examples/generative/wgan_gp/
    * Code implementation of wgan gp using tf keras
  * https://github.com/Francis-Hsu/WGAN-TF2/blob/master/models/WGAN.py
  * https://github.com/drewszurko/tensorflow-WGAN-GP
  * https://github.com/keras-team/keras-contrib/blob/master/examples/improved_wgan.py
  * https://github.com/mikigom/WGAN-LP-tensorflow
  * https://github.com/igul222/improved_wgan_training
  * https://github.com/lilianweng/unified-gan-tensorflow/blob/master/model.py
* Time series GAN code examples
  * https://github.com/jsyoon0823/TimeGAN
    * tf 1.0
    * https://github.com/firmai/tsgan
  * https://github.com/stakahashy/fingan/blob/master/models.py
  * https://github.com/vermouth1992/synthetic-time-series-smart-grid/blob/master/acgan.py
  * https://github.com/IvanBongiorni/GAN-RNN_Timeseries-imputation
  * [RGAN](https://arxiv.org/pdf/1706.02633.pdf)
    * https://github.com/ratschlab/RGAN/blob/master/model.py
  * [C-RNN-GAN](https://arxiv.org/pdf/1611.09904.pdf)
    * https://github.com/olofmogren/c-rnn-gan/blob/master/rnn_gan.py
* [NIPS 2016 Tutorial: Generative Adversarial Networks](https://arxiv.org/pdf/1701.00160v4.pdf)
* [GANs Trained by a Two Time-Scale Update Rule Converge to a Local Nash Equilibrium](https://papers.nips.cc/paper/2017/file/8a1d694707eb0fefe65871369074926d-Paper.pdf)
* [ON THE REGULARIZATION OF WASSERSTEIN GANS](https://arxiv.org/abs/1709.08894)
  * [ON REPRODUCTION OF On the regularization of Wasserstein GANs](https://arxiv.org/pdf/1712.05882.pdf)
* https://www.reddit.com/r/MachineLearning/comments/7g9n8q/r_171110337_are_gans_created_equal_a_largescale/dqj97l0/
* https://github.com/kodalinaveen3/DRAGAN
* https://www.reddit.com/r/MachineLearning/comments/7g9n8q/r_171110337_are_gans_created_equal_a_largescale/
* https://towardsdatascience.com/generating-synthetic-financial-time-series-with-wgans-e03596eb7185
* https://jonathan-hui.medium.com/gan-wasserstein-gan-wgan-gp-6a1a2aa1b490


## Possible Architectures to Use (CNNs for Time Series GANS)

### From FinGAN
* LR
  * Generator: `2e-4`
  * Discriminator: `1e-5`
* Log interval: `50`
* Iterations: `10240`
  * 10 epochs, 1024 batches per epoch
* Generator
  ```
  def generator_model_mlp_cnn():
    input_noise = Input(shape=(100,))
    model = Dense(128)(input_noise)
    model_1 = Reshape((128,1))(model)
    model_1 = UpSampling1D(2) (model_1)
    model_1 = Convolution1D(64,35,border_mode='same')(model_1)
    model_1 = BatchNormalization()(model_1)
    model_1 = LeakyReLU()(model_1)
    model_1 = UpSampling1D(2) (model_1)
    model_1 = Convolution1D(64,25,border_mode='same')(model_1)
    model_1 = BatchNormalization()(model_1)
    model_1 = LeakyReLU()(model_1)
    model_1 = UpSampling1D(2) (model_1)
    model_1 = Convolution1D(64,15,border_mode='same')(model_1)
    model_1 = BatchNormalization()(model_1)
    model_1 = LeakyReLU()(model_1)
    model_1 = UpSampling1D(2) (model_1)
    model_1 = Convolution1D(64,15,border_mode='same')(model_1)
    model_1 = BatchNormalization()(model_1)
    model_1 = LeakyReLU()(model_1)
    model_1 = UpSampling1D(2) (model_1)
    model_1 = Convolution1D(64,15,border_mode='same')(model_1)
    model_1 = BatchNormalization()(model_1)
    model_1 = LeakyReLU()(model_1)
    model_1 = UpSampling1D(2) (model_1)
    model_1 = Convolution1D(64,15,border_mode='same')(model_1)
    model_1_1 = Convolution1D(64,7,border_mode='same')(model_1)
    model_1_1_1 = Convolution1D(64,4,border_mode='same')(model_1)
    model_1 = Add()([model_1,model_1_1,model_1_1_1])
    model_1 = BatchNormalization()(model_1)
    model_1 = LeakyReLU()(model_1)
    model_1 = Convolution1D(1,1,border_mode='same')(model_1)
    model_1 = Activation('tanh')(model_1)
    model_2 = Dense(8192)(model)
    model_2 = Activation('tanh')(model_2)
    model_2 = Reshape((8192,1))(model_2)
    model = Multiply()([model_1,model_2])
    model = Model(input_noise,model)
    return model
  ```
* Discriminator
  ```
  def discriminator_model():
    model = Sequential()
    model.add(Convolution1D(64,10,border_mode='same',input_shape=(8192,1)))
    model.add(LeakyReLU(0.2))
    model.add(Convolution1D(128,10,border_mode='same'))
    model.add(LeakyReLU(0.2))
    model.add(Convolution1D(128,10,border_mode='same'))
    model.add(LeakyReLU(0.2))
    model.add(Flatten())
    model.add(Dense(32))
    model.add(LeakyReLU(0.2))
    model.add(Dropout(0.5))
    model.add(Dense(1))
    model.add(Activation('sigmoid'))
    return model
  ```
