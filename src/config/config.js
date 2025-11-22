const config = {
  data: {
    // Main invitation title that appears on the page
    title: "Wedding Invitation",
    // Opening message/description of the invitation
    description:
      "We are getting married and invite you to join us in celebrating this special moment.", // Nanti ini dibikin random
    // Groom's name
    groomName: "Tejas",
    // Bride's name
    brideName: "Sayali",
    // Groom's parents names
    parentGroom: "Mrs. Archana & Mr. Mahendra Chavan",
    // Bride's parents names
    parentBride: "Mrs. Vandana & Mr. Ramesh Jadhav",
    // Wedding date (format: YYYY-MM-DD)
    date: "2025-12-02",
        // Google Maps link for location (short clickable link)
    maps_url1: "https://maps.app.goo.gl/1QzQHNnbX61eQpqq7",
    // Google Maps embed code to display map on website
    // How to get: open Google Maps → select location → Share → Embed → copy link
    maps_embed1:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.1210793683194!2d74.3166589!3d20.5422263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bde85005bfb1623%3A0xd35c6a4537c9c646!2sShivkrupa%20Farm!5e0!3m2!1sen!2sin!4v1763823219094!5m2!1sen!2sin",

    
    // Google Maps link for location (short clickable link)
    maps_url2: "https://maps.app.goo.gl/fZz8vRAhjb7xzKUR6?g_st=iw",
    // Google Maps embed code to display map on website
    // How to get: open Google Maps → select location → Share → Embed → copy link
    maps_embed2:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.445093803145!2d74.9838875!3d20.4879724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd954db91485adb%3A0xef9cb30c065d0ea5!2sViram%20Lawns!5e0!3m2!1sen!2sin!4v1763806531939!5m2!1sen!2sin",
    // Event time (free format, example: "10:00 - 12:00 WIB")
    time: "12:28 PM",
    // Venue/building name
    location: "Viram Lawns",
    // Full address of the wedding venue
    address: "Derabardi Industrial Area, Chalisgaon, Maharashtra 424119",
    // Image that appears when link is shared on social media
    ogImage: "/images/og-image.jpg",
    // Icon that appears in browser tab
    favicon: "/images/favicon.ico",
    // List of event agenda/schedule
    agenda: [
      {
        // First event name
        title: "Mandav Ceremony",
        // Event date (format: YYYY-MM-DD)
        date: "2025-12-01",
        // Start time (format: HH:MM)
        startTime: "08:00 AM",
        // End time (format: HH:MM)
        // endTime: "17:30",
        // Event venue
        location: "Shivkrupa Farm - Dhandri, Satana",
      },
      {
        // First event name
        title: "Haldi Ceremony",
        // Event date (format: YYYY-MM-DD)
        date: "2025-12-01",
        // Start time (format: HH:MM)
        startTime: "06:00 PM",
        // End time (format: HH:MM)
        // endTime: "17:30",
        // Event venue
        location: "Shivkrupa Farm - Dhandri, Satana",
      },
      {
        // First event name
        title: "Wedding Ceremony",
        // Event date (format: YYYY-MM-DD)
        date: "2025-12-02",
        // Start time (format: HH:MM)
        startTime: "12:28 PM",
        // End time (format: HH:MM)
        // endTime: "17:30",
        // Event venue
        location: "Viram Lawns, Dhule Road, Chalisgaon",
      },
      
      // {
      //   // Second event name
      //   title: "Resepsi Nikah",
      //   date: "2024-12-24",
      //   startTime: "16:16",
      //   endTime: "17:30",
      //   location: "Grand Ballroom, Hotel Majesty",
      //   address: "Jl. Jend. Sudirman No.1, Jakarta",
      // }
      // You can add more agenda items with the same format
    ],

    // Background music settings
    audio: {
      // Music file (choose one or replace with your own file)
      src: "/audio/kanmani-anabodu.mp3", // or /audio/nature-sound.mp3
      // Music title to display
      title: "Kanmai Anabodu", // or Nature Sound
      // Whether music plays automatically when website opens
      autoplay: true,
      // Whether music repeats continuously
      loop: true
    },

    // List of bank accounts for digital envelope/gifts
    // banks: [
    //   {
    //     // Bank name
    //     bank: "Bank Central Asia",
    //     // Account number
    //     accountNumber: "1234567890",
    //     // Account holder name (all uppercase)
    //     accountName: "FULAN",
    //   },
    //   {
    //     bank: "Bank Mandiri",
    //     accountNumber: "0987654321",
    //     accountName: "FULANA",
    //   }
    //   // You can add more banks with the same format
    // ]
  }
};

export default config;