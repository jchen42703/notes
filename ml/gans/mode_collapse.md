# Mode Collapse
* The condition where the generator only produces certain types of output that you need
  * I.e. generating images of digits (0-9) and only generates (1-3)
* Occurs because the generator can fool the discriminator with only a couple modes,
and the discriminator is stuck at a saddle point and won't adapt
* From the Google Tutorial:
  > Each iteration of generator over-optimizes for a particular discriminator, and the discriminator never manages to learn its way out of the trap. As a result the generators rotate through a small set of output types. This form of GAN failure is called mode collapse.

## [Attempts to Remedy](https://developers.google.com/machine-learning/gan/problems)
The following approaches try to force the generator to broaden its scope by preventing it from optimizing for a single fixed discriminator:
* __Wasserstein loss:__ The Wasserstein loss alleviates mode collapse by letting you train the discriminator to optimality without worrying about vanishing gradients. If the discriminator doesn't get stuck in local minima, it learns to reject the outputs that the generator stabilizes on. So the generator has to try something new.
  * WGAN worked for [this guy](https://datascience.stackexchange.com/questions/51276/gan-am-i-seeing-mode-collapse-common-fixes-not-working).
* __Unrolled GANs:__ Unrolled GANs use a generator loss function that incorporates not only the current discriminator's classifications, but also the outputs of future discriminator versions. So the generator can't over-optimize for a single discriminator.

## Resources
* WGAN
  * https://machinelearningmastery.com/how-to-code-a-wasserstein-generative-adversarial-network-wgan-from-scratch/
* [Unrolled GAN](https://arxiv.org/pdf/1611.02163.pdf)
  * https://jonathan-hui.medium.com/gan-unrolled-gan-how-to-reduce-mode-collapse-af5f2f7b51cd
  * according to the official Unrolled GAN paper, it stabilizes training of GANs with complex __recurrent generators__
  * https://www.reddit.com/r/MachineLearning/comments/5q5bmq/d_how_do_unrolled_gans_work_implementation/
* https://towardsdatascience.com/gan-ways-to-improve-gan-performance-acf37f9f59b
  * Feature Matching
  * Historical Averaging
  * Some researchers had suggested that tuning the hyperparameters may ripe a better return than changing the cost functions.
* Repositories
  * https://github.com/projectAfey/keras_adversarial
  * https://github.com/poolio/unrolled_gan/blob/master/Unrolled%20GAN%20demo.ipynb
