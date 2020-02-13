BEGIN;

DROP TABLE IF EXISTS images,users CASCADE;

CREATE TABLE IF NOT EXISTS images (
    img_id SERIAL PRIMARY KEY,
    img_info VARCHAR(255) NOT NULL,
    img_url TEXT NOT NULL,
    img_category VARCHAR(255) NOT NULL
);

INSERT INTO images(img_info,img_url,img_category) 
VALUES
('BMW','https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-10%252Fbc7fedf0-f6a8-11e9-b7f9-b7bbe7db72db%26client%3Da1acac3e1b3290917d92%26signature%3D18764e3acf963f4bd97d4d42603ae78df1d021e1&client=amp-blogside-v2&signature=2455442e9256a05034382c94cb1f1219f7918aca','Cars'),
('range rover','https://01ed5cc604be6f4195b6-7697243bf6600fe7f0936bad4709cf28.ssl.cf1.rackcdn.com/SALYK2FV6LA244660/bd55ed1148505118c4c928a9a2658b2d.jpg','Cars'),
('mercedes','https://static.turbosquid.com/Preview/2019/08/21__06_23_33/2020_MercedesBenz_GLS_0000.jpgF981DA6B-930C-4B4E-9D2A-A1987EADAD11Zoom.jpg','Cars'),
('lamborghini','https://www.telegraph.co.uk/content/dam/technology/2020/01/06/TELEMMGLPICT000204208282_trans%2B%2BUHAg7isqCeBNZq_IFiL6kfFbWbaLu52YbXWADC0sYhs.jpeg ','Cars'),
('CAMARO','https://static.tcimg.net/vehicles/oem/4c3a47ee6df5ecb5/2020-Chevrolet-Camaro.jpg ','Cars'),
('audi','https://media.caradvice.com.au/image/private/q_auto/v1571867111/ez8cynjspgmyqtibgyg3.jpg','Cars'),
('seat','https://www.seat.co.il/wp-content/uploads/2019/01/leon-cupra-nevada-white.png','Cars'),
('golf gti','https://drivetribe.imgix.net/TWuedmhLRCqwz4HfAK7cqg?w=1400&h=788&fm=webp&auto=compress&lossless=true&fit=crop&crop=faces','Cars'),
('mazda','https://i0.wp.com/toyotamazda.com/wp-content/uploads/2017/11/2020-Mazda-6-New-Generation-based-on-Shinari-Concept-side-view.jpg?resize=640%2C400&ssl=1','Cars'), 

('Deer','https://data.whicdn.com/images/161813205/original.jpg','Animals'),
('cat','https://data.whicdn.com/images/339884135/original.jpg','Animals'),
('horse','https://data.whicdn.com/images/166261080/original.jpg','Animals'),
('duck','https://data.whicdn.com/images/65662130/original.jpg','Animals'),
('Dove','https://data.whicdn.com/images/203209610/original.jpg','Animals'),
('fox','https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&w=1000&q=80','Animals'),
('banda','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdRGHzqNlqdKVe8xTLFsNflTXuWwVKJEtzG7OctNnHXsh38xIn','Animals'),
('parrot','https://images2.minutemediacdn.com/image/upload/c_crop,h_1657,w_2950,x_0,y_158/f_auto,q_auto,w_1100/v1554746001/shape/mentalfloss/88127-istock-611617612.jpg','Animals'),
('tiger','https://i1.wp.com/www.onfocus.news/wp-content/uploads/2019/03/white-tiger.gif?fit=1280%2C730&ssl=1','Animals'),

('rose','https://upload.wikimedia.org/wikipedia/commons/5/51/Small_Red_Rose.JPG','flowers'),
('tulip','https://cf.shopee.com.my/file/5141661d01a1be0c282796d4d63f7440','flowers'),
('lavender','https://cdn.shopify.com/s/files/1/0022/4847/4713/products/MG_9602_2d83c59b-1c91-4ee8-83cb-c01ba5ff1a5f_700x.jpg?v=1575027393','flowers'),
('juwel','https://www.lubera.co.uk/media/image/thumbnail/2274157_1_720x600.jpg','flowers'),
('Anemone','https://upload.wikimedia.org/wikipedia/commons/d/da/Wood_anemone_flowers.jpg','flowers'),
('Astrantia','https://upload.wikimedia.org/wikipedia/commons/2/2d/Astrantia_%28Masterwort_Plant%29.jpg','flowers'),
('Calla Lily','https://images-na.ssl-images-amazon.com/images/I/41Ni%2Bvl9fxL._AC_.jpg','flowers'),
('Cranesbill Geranium','https://upload.wikimedia.org/wikipedia/commons/6/62/Geranium_macrorrhizum_stempel_gespleten.jpg','flowers'),
('Wax Plant','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZSld8M7bWNV1ktrcV4tXkG-9Bfb4Hh0fonTByj5Ei_0gaFFpb','flowers');



CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_pass VARCHAR(255) NOT NULL,
    user_img VARCHAR(255) NOT NULL,
    user_status VARCHAR(255) NOT NULL
);

INSERT INTO users(user_name,user_pass,user_img, user_status) 
VALUES
('francis','123Francis','https://i.ytimg.com/vi/JlxU9mAPnMg/hqdefault.jpg','Travel to life is like css to html'),
('fatmeeh','123Fatmeeh','https://cdn.pixabay.com/photo/2018/01/04/19/23/nature-3061436_960_720.jpg','HTTP 404: Status not Found'),
('mahmod','123Mahmod','https://image.shutterstock.com/image-photo/portrait-spanish-running-horse-black-260nw-760999816.jpg','Do not be afraid to step on people. Mario made a career from it');

CREATE TABLE IF NOT EXISTS liked_pic (
    like_id SERIAL PRIMARY KEY,
    img_id INTEGER REFERENCES images(img_id),
    user_id INTEGER REFERENCES users(user_id)
);

COMMIT;
