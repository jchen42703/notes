# Minibatch Discrimination
* [Understanding Minibatch Discrimination in GANs](https://www.inference.vc/understanding-minibatch-discrimination-in-gans/)
  * Mitigates mode collapse when all images look the same
    1. feed real images and generated images into the discriminator separately in different batches
    2. compute the similarity of the image x with images in the same batch.
    3. append the similarity `o(x)` in one of the dense layers in the discriminator to classify whether this image is real or generated.

## Resources
* Official Paper: [Improved Techniques for Training GANs](https://arxiv.org/pdf/1606.03498.pdf)
* Keras
  * https://github.com/forcecore/Keras-GAN-Animeface-Character/blob/master/discrimination.py
* TF
  * https://github.com/AYLIEN/gan-intro/blob/master/gan.py
  * https://aylien.com/blog/introduction-generative-adversarial-networks-code-tensorflow
* Torch
  * https://github.com/AaronYALai/Generative_Adversarial_Networks_PyTorch/blob/master/ImprovedGAN/ImprovedGAN.py
  * https://github.com/sanghviyashiitb/GANS-VanillaAndMinibatchDiscrimination/blob/master/minibatch_discrimination.py
