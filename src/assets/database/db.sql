-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2021 at 09:19 PM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `goodcare`
--

-- --------------------------------------------------------

--
-- Table structure for table `color`
--

CREATE TABLE `color` (
  `id` int(11) NOT NULL,
  `color_name` varchar(11) NOT NULL,
  `color_code` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `color`
--

INSERT INTO `color` (`id`, `color_name`, `color_code`) VALUES
(1, 'gold', 'gold'),
(2, 'black', '#000'),
(3, 'white', '#fff'),
(4, 'purple', 'purple'),
(5, 'pink', 'pink'),
(6, 'green', 'green'),
(7, 'silver', 'silver'),
(8, 'red', 'red'),
(9, 'navy blue', 'navy');

-- --------------------------------------------------------

--
-- Table structure for table `color_lookup`
--

CREATE TABLE `color_lookup` (
  `id` int(11) NOT NULL,
  `color_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `color_lookup`
--

INSERT INTO `color_lookup` (`id`, `color_id`, `product_id`) VALUES
(1, 2, 2),
(2, 2, 3),
(3, 2, 4),
(4, 3, 3),
(5, 4, 2),
(6, 4, 3),
(7, 4, 4),
(8, 5, 2),
(9, 5, 3),
(10, 5, 4),
(11, 6, 2),
(12, 7, 3),
(13, 8, 3),
(14, 9, 3);

-- --------------------------------------------------------

--
-- Table structure for table `image_lookup`
--

CREATE TABLE `image_lookup` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `image_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `image_lookup`
--

INSERT INTO `image_lookup` (`id`, `product_id`, `image_id`) VALUES
(1, 1, 13),
(2, 1, 10),
(3, 1, 11),
(4, 1, 12),
(5, 2, 14),
(6, 2, 7),
(7, 2, 8),
(8, 2, 9),
(9, 3, 15),
(10, 3, 1),
(11, 3, 2),
(12, 3, 3),
(13, 4, 16),
(14, 4, 4),
(15, 4, 5),
(16, 4, 6);

-- --------------------------------------------------------

--
-- Table structure for table `image_var`
--

CREATE TABLE `image_var` (
  `id` int(11) NOT NULL,
  `image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `image_var`
--

INSERT INTO `image_var` (`id`, `image`) VALUES
(1, 'image_var/band-1.png'),
(2, 'image_var/band-2.png'),
(3, 'image_var/band-3.png'),
(4, 'image_var/edge-1.jpg'),
(5, 'image_var/edge-2.jpg'),
(6, 'image_var/edge-3.jpg'),
(7, 'image_var/flexi-1.jpg'),
(8, 'image_var/flexi-2.jpg'),
(9, 'image_var/flexi-3.jpg'),
(10, 'image_var/clip-1.jpeg'),
(11, 'image_var/clip-2.jpeg'),
(12, 'image_var/clip-3.jpeg'),
(13, 'images/product-1.jpg'),
(14, 'images/product-2.jpg'),
(15, 'images/product-3.jpg'),
(16, 'images/product-4.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `number` int(20) NOT NULL,
  `address` varchar(500) NOT NULL,
  `requests` varchar(500) NOT NULL,
  `order_name` varchar(50) NOT NULL,
  `order_price` int(11) NOT NULL,
  `order_shipping` int(11) NOT NULL,
  `order_quantity` int(11) NOT NULL,
  `order_product_id` int(11) NOT NULL,
  `order_color` varchar(20) NOT NULL,
  `order_size` varchar(20) NOT NULL,
  `order_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `name`, `surname`, `email`, `number`, `address`, `requests`, `order_name`, `order_price`, `order_shipping`, `order_quantity`, `order_product_id`, `order_color`, `order_size`, `order_date`) VALUES
(1, 'Kamo', 'Molefe', 'test@test.com', 0, 'Pinacle of Success, Rich and wealthy, on top of the world', 'undefined', 'Afro clip ins ', 1350, 0, 1, 1, 'black', '10inch', '2021-03-10 14:28:41.000000'),
(2, 'Kamo', 'Molefe', 'test@test.com', 0, 'Highest point of success', 'undefined', 'Afro clip ins ', 1350, 0, 1, 1, 'black', '10inch', '2021-03-10 14:45:40.000000'),
(3, 'Kamo', 'molefe', 'test@test.com', 0, 'hey', 'undefined', 'Afro clip ins ', 1350, 0, 1, 1, 'black', '10inch', '2021-03-10 14:59:49.000000'),
(4, 'Kamo', 'Molefe', 'test@test.com', 0, 'hey', 'undefined', 'Afro clip ins ', 1350, 0, 1, 1, 'black', '10inch', '2021-03-10 15:04:49.000000'),
(5, 'Kamo', 'Molefe', 'test@test.com', 0, 'hey', 'undefined', 'Afro clip ins ', 1350, 0, 1, 1, 'black', '10inch', '2021-03-10 15:18:32.000000'),
(6, 'Kamo', 'Molefe', 'test@test.com', 0, 'hey', 'undefined', 'Afro clip ins ', 1350, 0, 1, 1, 'black', '10inch', '2021-03-10 15:30:47.000000'),
(7, 'Kamo', 'Molefe', 'test@test.com', 0, 'hey', 'undefined', 'Easy detangling brush', 120, 100, 1, 2, 'black', '10inch', '2021-03-10 15:39:55.000000'),
(8, 'Kamo', 'Molefe', 'test@test.com', 0, 'Hey', 'Hey', 'Afro clip ins ', 1350, 0, 1, 1, 'black', '10inch', '2021-03-10 15:51:17.000000'),
(9, 'Kamo', 'Molefe', 'test@test.com', 0, 'hey', 'hey', 'Easy detangling brush', 120, 100, 1, 2, 'black', '10inch', '2021-03-10 16:01:02.000000'),
(10, 'Kamo', 'Molefe', 'test@test.com', 0, 'hey', 'hey', 'Afro clip ins ', 1350, 0, 1, 1, 'black', '10inch', '2021-03-10 16:01:02.000000');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `details` varchar(500) NOT NULL,
  `price` int(11) NOT NULL,
  `checkoutprice` int(11) NOT NULL,
  `shipping` int(11) NOT NULL,
  `image` varchar(50) NOT NULL,
  `color_variant` int(2) NOT NULL DEFAULT '0',
  `size_variant` int(2) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `description`, `details`, `price`, `checkoutprice`, `shipping`, `image`, `color_variant`, `size_variant`) VALUES
(1, 'Afro clip ins ', 'GoodCare GoodHair Afro Kinky Coily Clip ins were created with you in mind and are made of 100% virgin human hair. This hair is ideal for our 4B-4C naturalista. The curl pattern and texture can be styled to have the look and feel of a 3C-4A hair texture by using our curl forming easy detangling brush. ', 'Colour: Natural Black \r\nWeight: 100g per pack\r\n\r\nShipping FREE\r\nNumber of pieces: 7 pieces per pack \r\nHair can be washed, cut, dyed, twisted, braided out or bantu knotted\r\nCan last 1-2 years with proper care and maintenance \r\n\r\nRecommended Quantity\r\n 1 pack for adding extra volume and length.\r\n 2 packs for 100 % coverage\r\n', 1350, 1350, 0, 'images/product-1.jpg', 0, 1),
(2, 'Easy detangling brush', 'The GoodCare GoodHair Easy Detangling brush is the perfect detangling tool for kinky, curly and coily hair. No more painful detangling with the widely spaced flexi-bristles, which glide easily through hair without breaking or damaging your hair strands. Good for defining natural curls or waves, our brush prevents abrupt hair pulling and aids in preventing hair loss or hair shedding.', 'Material: Plastic\r\nDimensions: 24 x 7.5 x 4.5cm\r\n\r\nShipping R100\r\nColor: Pink, Green, Black, Purple\r\nWeight: 70g\r\nFeatures: 8 rows flexible nylon bristles with vent area\r\n', 120, 120, 100, 'images/product-2.jpg', 1, 0),
(3, 'Rhinestone headbands', 'Look glitzy and glamourous with our handmade Rhinestone Headbands to style your clip ins and wigs. This pretty and sparkling padded headband is good for any occasion. Our headbands are sewn from high quality velvet and completely sewn by hand without using glue to avoiding the “headband headache”. A product guaranteed to make you look good and feel good. ', 'Colours: Assorted\r\nWeight: 78g\r\nStyle: Luxury\r\nMaterial: Rhinestone, Alloy\r\n\r\nShipping R100\r\n', 160, 160, 100, 'images/product-3.jpg', 1, 0),
(4, 'Edge brush', 'Getting those baby hairs laid is easy and quick with our GoodCare GoodHair Egde brush. This 2in1 Edge Brush and Comb is perfect for all hair types and textures. This is an everyday essential to keep your hairstyles looking smooth, shiny, neat and healthy. ', 'Material: ABS & Nylon\r\nSize: 17.8cm, 2.3/1.2cm\r\nWeight: 7g\r\nDesign: Dual head design, boar bristle\r\n\r\nShipping R100', 50, 50, 100, 'images/product-4.jpg', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `size`
--

CREATE TABLE `size` (
  `id` int(11) NOT NULL,
  `size_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `size`
--

INSERT INTO `size` (`id`, `size_name`) VALUES
(1, '10 inch'),
(2, '12 inch'),
(3, '14 inch'),
(4, '16 inch');

-- --------------------------------------------------------

--
-- Table structure for table `size_lookup`
--

CREATE TABLE `size_lookup` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `size_id` int(11) NOT NULL,
  `size_price` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `size_lookup`
--

INSERT INTO `size_lookup` (`id`, `product_id`, `size_id`, `size_price`) VALUES
(1, 1, 1, 1350),
(2, 1, 2, 1500),
(3, 1, 3, 1700),
(4, 1, 4, 1900);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `color_lookup`
--
ALTER TABLE `color_lookup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `image_lookup`
--
ALTER TABLE `image_lookup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `image_var`
--
ALTER TABLE `image_var`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `size_lookup`
--
ALTER TABLE `size_lookup`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `color`
--
ALTER TABLE `color`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `color_lookup`
--
ALTER TABLE `color_lookup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `image_lookup`
--
ALTER TABLE `image_lookup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `image_var`
--
ALTER TABLE `image_var`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `size`
--
ALTER TABLE `size`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `size_lookup`
--
ALTER TABLE `size_lookup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
