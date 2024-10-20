<template>
    <div class="" style="margin-top: 160px;">
        <a href="" >
            <img src="https://image.kkday.com/v2/image/get/s1.kkday.com/product_183165/20240626070028_TGWs8/jpg" alt="" width="100%">
        </a>
    </div>
    <div class="news-section">
    <div class="header">
      <h2>Latest News</h2>
      <a href="#" class="view-more">View More &rarr;</a>
      
    </div>

    <div class="news-grid">
  <div v-for="news in newsList" :key="news.id" class="news-item">
    <a :href="news.link" target="_blank">
      <img :src="news.image" :alt="news.title" />
      <div class="news-content">
        <h3>{{ news.title }}</h3>
        <p class="date">{{ news.date }}</p>
        <p class="source">{{ news.source }}</p>
      </div>
    </a>
  </div>
</div>

  </div>

   
    

    
    <div class="banner-left">
       
      <h2>Join VideoPass with a 80% discount</h2>
      <p>It all comes down to this! 4 GP's to decide who will be crowned World Champion</p>
      <button class="cta-button">WATCH NOW!</button>
      
    </div>
     <div class="banner-left img">
      <img src="https://resources.motogp.pulselive.com/photo-resources/2024/10/16/a88abdbf-0700-44eb-a9ed-172b40c1beb9/image.png?width=1110&height=400" alt="MotoGP VideoPass Promotion">
     </div>
  <div id="app">
  <div v-for="(rider, index) in rider_images" :key="index" class="rider-image">
    <img :src="rider" alt="Rider Image" />
    {{ rider.rider_images }}
  </div>
</div>
<div class="what-to-watch">
    <h2>What To Watch</h2>
    <div class="watch-grid">
      <div v-for="(item, index) in items" :key="index" class="watch-item">
        <a :href="item.link" target="_blank">
          <img :src="item.image" :alt="item.title" />
          <p>{{ item.title }}</p>
        </a>
      </div>
    </div>
    <a href="#" class="view-more">View More →</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsList: [
        {
          id: 1,
          title: 'Martin produces late magic to clinch pole from Marc Marquez',
          date: '19 Oct 2024',
          source: 'By motogp.com',
          image: 'https://resources.motogp.pulselive.com/photo-resources/2024/10/19/b0d94805-f9df-4bb5-a24d-8b99c1bed4b3/Report-MGP-SPR.jpg?width=400&height=225', // Đường dẫn tới ảnh đầu tiên
          link: "https://www.motogp.com/en/news/2024/10/19/martin-sublime-as-marquez-and-bastianini-stay-in-the-fight/510591",
        },
        {
          id: 2,
          title: 'Marc Marquez prevails on Friday as Bastianini faces Q1',
          date: '18 Oct 2024',
          source: 'By motogp.com',
          image: 'https://resources.motogp.pulselive.com/photo-resources/2024/10/19/f4eae1dc-1222-4935-a461-68282f00ce8d/LGZ_7785.jpg?width=400&height=225', // Đường dẫn tới ảnh thứ hai
        link: "https://www.motogp.com/en/news/2024/10/19/advantage-martinator-magic-martin-sends-fans-wild/510592",
        },
        {
          id: 3,
          title: 'FP1 cancelled but vibe check passed: the best of the rain delay',
          date: '18 Oct 2024',
          source: 'By motogp.com',
          image: 'https://resources.motogp.pulselive.com/photo-resources/2024/10/19/5cfdeb40-5c7c-4405-b8b7-f2ab73836afd/Report-MGP-QP.jpg?width=400&height=225', // Đường dẫn tới ảnh thứ ba
        link: "https://www.motogp.com/en/news/2024/10/19/martin-produces-late-magic-to-clinch-pole-from-marc-marquez/510590",
        },
        {
          id: 4,
          title: 'What you might have missed from Thursday in Australia',
          date: '17 Oct 2024',
          source: 'By motogp.com',
          image: 'https://resources.motogp.pulselive.com/photo-resources/2024/10/18/00728460-8ef0-446f-92dc-4756acaa6eb6/Report-MGP-PR.jpg?width=400&height=225', // Đường dẫn tới ảnh thứ tư
        link: "https://www.motogp.com/en/news/2024/10/18/marc-marquez-prevails-on-friday-as-bastianini-faces-q1/510585",
        },
        {
          id: 5,
          title: 'FP1 cancelled but vibe check passed: the best of the rain delay',
          date: '18 Oct 2024',
          source: 'By motogp.com',
          image: 'https://resources.motogp.pulselive.com/photo-resources/2024/10/18/08da12af-ebc9-47bd-b587-f9e02a9d761f/LGZ_0322.jpg?width=400&height=225', // Đường dẫn tới ảnh thứ tư
        link: "https://www.motogp.com/en/news/2024/10/18/fp1-cancelled-but-vibe-check-passed-the-best-of-the-rain-delay/510583",
        },
        {
          id: 6,
          title: 'What you might have missed from Thursday in Australia',
          date: '17 Oct 2024',
          source: 'By motogp.com',
          image: 'https://resources.motogp.pulselive.com/photo-resources/2024/10/17/1a35226c-7a07-46b9-8447-c81791f8fcda/LG9_2133.jpg?width=1440&height=810', // Đường dẫn tới ảnh thứ tư
        link: "https://www.motogp.com/en/news/2024/10/17/what-you-might-have-missed-from-thursday-in-australia/510624",
        },
        {
          id: 7,
          title: 'Di Giannantonio to undergo surgery following Thai GP',
          date: '18 Oct 2024',
          source: 'By motogp.com',
          image: 'https://resources.motogp.pulselive.com/photo-resources/2024/10/17/0009fa0e-4cf0-45c1-83bb-273ab3af392e/LG9_8590.jpg?width=1440&height=810', // Đường dẫn tới ảnh thứ tư
      link: "https://www.motogp.com/en/news/2024/10/17/di-giannantonio-to-undergo-surgery-following-thai-gp/510629",
      },
        {
          id: 8,
          title: 'Unlock exclusive access with Gresini Racings fan-powered sponsorship',
          date: '16 Oct 2024',
          source: 'By motogp.com',
          image: 'https://resources.motogp.pulselive.com/photo-resources/2024/10/16/2fe640bb-2ab8-42d1-a001-0a8ff14ab1bc/03_Fan-Powered-Sponsorship_v1A.jpg?width=1440&height=810', // Đường dẫn tới ảnh thứ tư
        link: "https://www.motogp.com/en/news/2024/10/16/unlock-exclusive-access-with-gresini-racings-fan-powered-sponsorship/510509",
        },
      ],
      items: [
        {
          
          image: "https://resources.motogp.pulselive.com/photo-resources/2023/07/03/cefa011c-4bb2-428f-8af0-cae828661a70/collection-mgp-stories-card.png?width=280&height=420", 
          link: "https://www.motogp.com/en/videopass/collections/motogp-stories",
        },
        {
          
          image: "https://resources.motogp.pulselive.com/photo-resources/2023/07/03/e094ccfc-6bb7-4953-ae5f-fb787c7841aa/collection-conversation-card.png?width=280&height=420",
          link: "https://www.motogp.com/en/videopass/collections/in-conversation-with",
        },
        {
          
          image: "https://resources.motogp.pulselive.com/photo-resources/2023/07/03/d4ab7f08-438f-4294-9a48-717e02c57e83/collection-historical-card.png?width=280&height=420",
          link: "https://www.motogp.com/en/videopass/collections/historical-features",
        },
        {
          
          image: "https://resources.motogp.pulselive.com/photo-resources/2024/05/30/509af4c0-e010-409f-99dd-6650e9941367/collection-behind-scenes-card.png?width=280&height=420",
          link: "https://www.motogp.com/en/videopass/collections/behind-the-scenes",
        },
        {
         
          image: "https://resources.motogp.pulselive.com/photo-resources/2023/07/03/c48d496f-23fc-45c9-856f-c9a321b79861/collection-documentaries-card.png?width=280&height=420",
          link: "https://www.motogp.com/en/videopass/collections/documentaries/",
        },
      ],
    };
  },
   
  
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

.news-section {
  width: 80%;
  margin: 50px auto;
  
}
.news-grid a {
  text-decoration: none;
  color: black; /* Bạn có thể thay đổi màu chữ tùy ý */
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: white;
}
.header1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: white;
  font-size: 28px;
}
.header h2 {
  font-size: 28px;
  background-color: none;
  color: black;
}

.view-more {
  color: red;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  background-color: none;
}

.news-item {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.news-item:hover {
  transform: translateY(-5px);
}

.news-item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.news-content {
  padding: 15px;
}

.news-content h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

.date,
.source {
  font-size: 14px;
  color: #777;
}


.banner-container {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: auto;
}

.banner-left {
  width: 55%;
}

.banner-left h2 {
  font-size: 48px;
  color: #000;
  margin: 10px 0;
}

.banner-left p {
  font-size: 18px;
  color: #000;
  margin-bottom: 20px;
}

.banner-left img {
   
  width: 100%;
  position: absolute;
  right: 0px;
  width: 650px; 
  overflow: auto;
  justify-content: center;
   margin-top: -190px;
    height: auto;
}

.cta-container {
  background-color: #f4f4f4;
  padding: 20px;
  text-align: center;
}

.cta-container h2 {
  font-size: 32px;
  color: #333;
  margin-bottom: 10px;
}

.cta-container p {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.cta-button {
  padding: 10px 20px;
  background-color: #d10000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
}

.cta-button:hover {
  background-color: #a80000;
}


.what-to-watch {
  text-align: center;
}

.watch-grid {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
}

.watch-item {
  flex: 1;
}

.watch-item img {
  width: 100%;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.watch-item img:hover {
  transform: scale(1.05);
}

.watch-item p {
  margin-top: 10px;
  font-weight: bold;
  color: #000;
}

.view-more {
  display: block;
  margin-top: 20px;
  text-align: right;
  color: red;
  text-decoration: none;
  font-weight: bold;
}

.view-more:hover {
  text-decoration: underline;
}
</style>