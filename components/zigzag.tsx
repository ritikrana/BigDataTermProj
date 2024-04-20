import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">TensorFlow vs PyTorch</h1>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">TensorFlow</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    In the data preparation stage, the dataset is read, questions and answers are extracted, and data is visualized via histograms for sentence length and word frequency distribution. Tokenization and padding ensure uniform input length using TensorFlow Keras. Model building defines a neural network with embedding, Flatten, and Dense layers. Model compilation employs sparse categorical cross-entropy loss and Adam optimizer, followed by training for 100 epochs. Evaluation and saving occur implicitly during training, with the model saved using Keras. Chatbot interaction involves a function for responding to user questions. Testing involves interacting with the chatbot until the user inputs "exit," concluding the interaction with a farewell message.
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Pytorch</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    The data preprocessing phase begins by loading conversation datasets from JSON and txt files, followed by normalization, sentence pair extraction, and vocabulary dictionary creation. The chatbot model adopts an encoder-decoder architecture with attention mechanisms: the encoder processes input sentences to generate hidden states, while the decoder utilizes encoder outputs and attention weights to produce responses. Training encompasses a loop that iterates through data batches, computes losses, and updates model parameters via backpropagation, with periodic checkpoints for progress tracking and training resumption. Post-training evaluation involves visualizing sentence length and word frequency distributions. The script culminates in a chatting interface allowing users to interact with the trained chatbot model.
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <p className="text-xl text-gray-400 mb-4">
                    In conclusion, using AWS S3  to store machine learning models, such as those created with PyTorch and TensorFlow, provides flexibility, scalability, and security when it comes to cloud storage. Users can set up their AWS accounts and build dedicated S3 buckets to safely store their models by following a simple setup procedure.<br/>

                    High availability and durability are ensured by AWS S3's redundancy across many data centers, which is essential for protecting priceless information. The way it works with other AWS services makes model deployment and execution simple and supports a wide range of use cases, such as big data analytics, application data storage, and content delivery.
                    In addition, the pay-as-you-go pricing model guarantees cost-effectiveness by providing dependable cloud storage solutions to businesses of all sizes without requiring a start-up investment in physical infrastructure. With strong features like data encryption, access controls, and audit documentation, AWS S3 offers complete data protection, meeting regulatory needs and reducing security threats.<br/>

                    Overall, the model maintenance process gets easier when PyTorch and TensorFlow models are stored on AWS S3. This allows users to concentrate on innovation and data-driven insights, while AWS manages the complex storage infrastructure.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <h1 className="h2 mb-4">Feature Comparision</h1>
              <p className="text-xl text-gray-400">Comparison of key features between TensorFlow and PyTorch: highlighting differences in computational graph, debugging, popularity, community support, deployment, model serving, ease of use, visualization, and flexibility</p>
            </div>

            <table data-aos="fade-up">
              <thead>
                <tr>
                  <td className='h4'>Feature</td>
                  <td className='h4'>TensorFlow</td>
                  <td className='h4'>PyTorch</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='font-architects-daughter text-xl text-purple-600 mb-2'>Performance</td>
                  <td className='text-gray-400'>Known for high performance, especially on complex models</td>
                  <td className='text-gray-400'>Also performs well on complex models, though some benchmarks suggest TensorFlow might have a slight edge.</td>
                </tr>
                <tr>
                  <td className='font-architects-daughter text-xl text-purple-600 mb-2'>Scalability</td>
                  <td className='text-gray-400'>Scalable for distributed training across multiple GPUs and TPUs. Efficient resource utilization lowers overall computing costs.</td>
                  <td className='text-gray-400'>Highly scalable, particularly on cloud platforms. Can handle large datasets effectively, scaling automatically based on workload demands.</td>
                </tr>
                <tr>
                  <td className='font-architects-daughter text-xl text-purple-600 mb-2'>Ease of Use</td>
                  <td className='text-gray-400'>Requires programming knowledge, may have a steeper learning curve.</td>
                  <td className='text-gray-400'>Known for a smooth learning curve and beginner-friendly interface.</td>
                </tr>
                <tr>
                  <td className='font-architects-daughter text-xl text-purple-600 mb-2'>Integration with other tools</td>
                  <td className='text-gray-400'>Integrates well with other Google Cloud Services and various tools via Python libraries.</td>
                  <td className='text-gray-400'>A part of the Google Cloud Platform ecosystem, with native connections to Google Cloud Storage and other databases.</td>
                </tr>
                <tr>
                  <td className='font-architects-daughter text-xl text-purple-600 mb-2'>CPU Utilization</td>
                  <td className='text-gray-400'>Highly efficient CPU usage.</td>
                  <td className='text-gray-400'>Efficient CPU usage, though TensorFlow might have a slight edge here.</td>
                </tr>
                <tr>
                  <td className='font-architects-daughter text-xl text-purple-600 mb-2'>Memory Utilization</td>
                  <td className='text-gray-400'>Efficient memory usage for small to medium-sized data.</td>
                  <td className='text-gray-400'>Efficient memory management, particularly when dealing with large datasets.</td>
                </tr>
                <tr>
                  <td className='font-architects-daughter text-xl text-purple-600 mb-2'>Overall Resource Utilization</td>
                  <td className='text-gray-400'>Can be resource-intensive for complex models and large datasets.</td>
                  <td className='text-gray-400'>Demonstrates effective resource utilization, though TensorFlow might be slightly more resource intensive.</td>
                </tr>
                <tr>
                  <td className='font-architects-daughter text-xl text-purple-600 mb-2'>Cost</td>
                  <td className='text-gray-400'>Open-source, free software.</td>
                  <td className='text-gray-400'>Price depends on usage and storage, potentially costly for large datasets.</td>
                </tr>
              </tbody>
            </table>

          </div>

        </div>
      </div>
    </section>
  )
}
