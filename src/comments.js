import femaleImg from './assets/female-user.png'
import femaleImage from './assets/female-user-1.png'
import femaleImages from './assets/female-user-2.png'
import maleImg from './assets/male-icon-1.jfif'
export const commentsData = [
    {
        name:"Namrata Das",
        commentText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        authorProfileImageUrl: femaleImg,
        publishedAt:'2023-02-12',
        replies:[
            {
                name:"Teesha Patil",
                commentText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                authorProfileImageUrl: femaleImages,
                publishedAt:'2023-01-10',
            },
            {
                name:"Samar Basu",
                commentText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                authorProfileImageUrl: maleImg,
                publishedAt:'2022-07-24',
                replies:[
                    {
                        name:"Isha Goel",
                        commentText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                        authorProfileImageUrl: femaleImg,
                        publishedAt:'2022-05-19',
                    },
                    {
                        name:"Nishika Irani",
                        commentText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                        authorProfileImageUrl: femaleImages,
                        publishedAt:'2022-08-25',
                    },
                ]
            },
            {
                name:"Diya Khanna",
                commentText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                authorProfileImageUrl: femaleImage,
                publishedAt:'2023-02-12',
            }
        ]
    },
    {
        name:"Asha Sinha",
        commentText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        authorProfileImageUrl: femaleImage,
        publishedAt:'2021-09-17',
    },
    {
        name:"Ajit Dutta",
        commentText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        authorProfileImageUrl: maleImg,
        publishedAt:'2020-03-03',
    },
    {
        name:"Lalita Kumari",
        commentText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        authorProfileImageUrl: femaleImages,
        publishedAt:'2022-10-08',
    },
]