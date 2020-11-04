# Tips and Tricks for Training GANs
* The losses are sometimes not important.
  * Don't be anxious to stop training too soon!
  * Exception is where discriminator loss goes to 0 very quickly.
* Soft labeling the real/fake labels helps!
* Learning rate is an extremely important hyperparameter!
  * Can often be adjusted to fix mode collapse (where the GAN only produces examples of certain types/classes)
* Different learning rates for the generator and the discriminator
* Monitor the gradients!

## One Optimizer v. Two Separate Optimizers?
* It makes more sense to have two separate optimizers (i.e. for different lrs for discriminator and generator)
* __Examples with 1 Optimizer__
  * [S-LSTM-GAN-MNIST](https://github.com/amitadate/S-LSTM-GAN-MNIST)
    * 1 Adam
* __Examples with 2 Optimizers__
  * [Sequential Data GAN](https://github.com/jsikyoon/SequentialData-GAN)
    * 2 Adam
    ```
    optimizer_g = tf.train.AdamOptimizer(0.0001)
    optimizer_d = tf.train.AdamOptimizer(0.00001)
    ```
  * [Implementation of C-RNN-GAN.](https://github.com/olofmogren/c-rnn-gan)
    * 1 Adam, 1 SGD
    ```
    g_optimizer = tf.train.AdamOptimizer(self._lr)
    d_optimizer = tf.train.GradientDescentOptimizer(self._lr*FLAGS.d_lr_factor)
    ```

## Vanishing Gradients
Research has suggested that if your discriminator is too good, then generator training can fail due to vanishing gradients. In effect, an optimal discriminator doesn't provide enough information for the generator to make progress.
### Attempts to Remedy
* Wasserstein loss: The Wasserstein loss is designed to prevent vanishing gradients even when you train the discriminator to optimality.
* Modified minimax loss: The original GAN paper proposed a modification to minimax loss to deal with vanishing gradients.
