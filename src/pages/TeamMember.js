import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import scrollToTop from '../helpers/scrollToTop'

function TeamMember() {
    const params = useParams()
    const [member, setMember] = useState({})
    const members = {
        sierra: {
            name: 'Sierra',
            desc: `
            Sierra, a talented female hairstylist, had always been drawn to the world of beauty and grooming. Growing up in a quiet suburban town, she often experimented with hairdos on her friends and family, showcasing an innate talent for creating stunning hairstyles. Her childhood fascination with hair eventually blossomed into a passion, and she decided to pursue a career in hairstyling.
        
            After graduating from beauty school with top honors, Sierra set her sights on making a name for herself in the bustling city of Ottawa. She was eager to explore her newfound skills in a more dynamic environment. It was during this time that she heard about "Billy's Barber," a renowned barbershop in the heart of the city. While it primarily catered to men's grooming needs, Billy's Barber had earned a reputation for its commitment to precision and style.
        
            Sierra was intrigued by the challenge of working in a traditional barbershop setting. She believed that her expertise in hairstyling could add a fresh and contemporary dimension to the establishment. After perfecting her portfolio, Sierra boldly approached Billy, the owner of the barbershop, and expressed her interest in joining the team.
        
            Billy was initially skeptical but agreed to give Sierra a chance. He was impressed by her dedication and the unique skills she brought to the table. Sierra's journey at Billy's Barber had officially begun.
        
            Over time, Sierra's talent and enthusiasm became evident to both her colleagues and the shop's clients. She seamlessly integrated her hairstyling techniques with traditional barbering, creating a fusion of classic and modern grooming styles. The once-skeptical Billy had become a mentor and supporter of Sierra's journey, recognizing her as an invaluable asset to the barbershop.
        
            Sierra's transition from a suburban hairstylist to a respected member of Billy's Barber was not just a professional achievement but a testament to her determination and passion for her craft. She had found her niche in a place she never expected and continued to thrive, leaving a mark on the world of grooming and style in Ottawa.
          `,
            image: 'https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            subheader: 'Expert Stylist'
        },
        billy: {
            name: 'Billy',
            desc: `
            Billy, the charismatic owner of "Billy's Barber," was a man with a deep love for the art of traditional barbering. He was born and raised in the heart of Ottawa, where he learned the importance of community and the value of hard work from a young age. Billy's father had been a barber, and he had fond memories of watching his father transform clients with expert precision and attention to detail.
        
            After honing his skills through years of apprenticeship under his father's guidance, Billy decided to continue his family's legacy by opening his own barbershop. He wanted to create a place where men could not only get a top-notch haircut but also relax, unwind, and connect with others.
        
            "Billy's Barber" quickly became a beloved institution in the city. It was more than just a barbershop; it was a community hub where people came not just for haircuts but also for conversation, camaraderie, and the comforting feeling of being part of something special.
        
            Over the years, Billy's commitment to his craft and his clients never wavered. He believed in the timeless art of traditional barbering, where a well-executed haircut could instill confidence and provide a sense of renewal. Billy was known for his warm demeanor, his impeccable barbering skills, and his ability to make every customer feel like a cherished friend.
        
            Despite the fast-paced world around him, Billy remained dedicated to preserving the traditions of the barbershop. He took pride in mentoring young barbers, passing down the wisdom he had acquired from his father and instilling in them the values of craftsmanship and community.
        
            Billy's story was one of passion, dedication, and the enduring spirit of a barber who had created more than just a place to get a haircut – he had built a haven where people found a sense of belonging, tradition, and the timeless art of grooming in the heart of Ottawa.
          `,
            image: 'https://images.pexels.com/photos/6475046/pexels-photo-6475046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            subheader: 'Master Barber'
        },
        jonny: {
            name: 'Jonny',
            desc: `
            Jonny, the talented stylist at "Billy's Barber," brought a unique flair to the establishment. Growing up in a family of artists, Jonny was drawn to the world of hair styling from an early age. He would often experiment with his own hair and those of willing friends, showcasing an innate talent for creative and unconventional styles.
        
            After completing his formal education in hairstyling, Jonny set out to explore the bustling city of Ottawa in search of a place that aligned with his vision of artistic expression through hair. It was then that he stumbled upon "Billy's Barber," a renowned barbershop known for its commitment to precision and style.
        
            Despite being primarily a traditional barbershop, "Billy's Barber" welcomed Jonny's unique perspective on hairstyling with open arms. Billy, the shop's owner, recognized Jonny's passion and creativity and offered him a position as a stylist alongside the barbers.
        
            Jonny's presence added a new dimension to the shop. He was known for his daring and avant-garde hair designs, attracting a clientele seeking something beyond the conventional. From vibrant colors to intricate braids, Jonny's creations were a testament to his artistic spirit.
        
            What made Jonny truly special was his ability to make every client feel like a canvas waiting to be transformed. He would listen to their ideas and collaborate with them to bring their visions to life, all while maintaining the precision and attention to detail that "Billy's Barber" was known for.
        
            Over time, Jonny's eclectic approach to hairstyling became a celebrated feature of the shop. He had found his creative haven at "Billy's Barber," where he not only continued to hone his craft but also contributed to the shop's reputation for innovation and individuality.
        
            Jonny's story was one of artistic passion, self-expression, and the harmonious fusion of traditional and contemporary hairstyling that made "Billy's Barber" a place where clients could not only receive a top-notch haircut but also embark on a transformative journey of self-discovery.
          `,
            image: 'https://images.pexels.com/photos/2834009/pexels-photo-2834009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            subheader: 'Expert Stylist'
        }
    }
    useEffect(() => {
        scrollToTop()
        if(params.id === 'sierra') {
            setMember(members.sierra)
        }
        if(params.id === 'billy') {
            setMember(members.billy)
        }
        if(params.id === 'jonny') {
            setMember(members.jonny)
        }
      },[])
    return (
      <div className='min-h-screen'>
          <div className='relative'>
              <img className='brightness-75 grayscale object-cover h-[40vh] object-left-bottom w-full' src='https://lella.qodeinteractive.com/wp-content/uploads/2019/08/title-area-img-4.jpg'></img>
              <h2 className="absolute h-full top-0 flex items-center left-1/2 -translate-x-1/2 text-center py-4 text-6xl text-red-800">Our Team</h2>
          </div>
        <section className="py-20 gap-4 flex justify-center relative text-neutral-950">
          <div className="flex flex-col gap-4 px-4">
            <p className="text-4xl">{member.name}</p>
            <p className="italic">{member.subheader}</p>
            <p className="max-w-lg mx-auto text-xl">{member.desc}</p>
          </div>
          <img src={member.image} className="w-1/4 h-fit grayscale object-cover hidden md:block" ></img>
        </section>
      </div>
    )
}

export default TeamMember