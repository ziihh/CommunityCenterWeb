-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 05, 2019 at 02:58 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prestgarn`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `eventId` int(11) NOT NULL,
  `title` varchar(250) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `image` longblob,
  `imagealt` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `tags` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `footer`
--

CREATE TABLE `footer` (
  `footerId` int(11) NOT NULL,
  `title` varchar(250) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `gallerycategories`
--

CREATE TABLE `gallerycategories` (
  `Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gallerycategories`
--

INSERT INTO `gallerycategories` (`Name`) VALUES
('Arrangementer'),
('Bildebank'),
('Prestgarn');

-- --------------------------------------------------------

--
-- Table structure for table `galleryimages`
--

CREATE TABLE `galleryimages` (
  `Id` int(11) NOT NULL,
  `Subid` int(11) NOT NULL,
  `Category` varchar(255) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Image` longblob NOT NULL,
  `Alt` varchar(255) NOT NULL,
  `Describtion` varchar(255) DEFAULT NULL,
  `Fotograf` varchar(255) DEFAULT NULL,
  `Dato` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `galleryimages`
--

INSERT INTO `galleryimages` (`Id`, `Subid`, `Category`, `Title`, `Image`, `Alt`, `Describtion`, `Fotograf`, `Dato`) VALUES
(1, 1, 'Arrangementer', 'Bilde titel', 0x68747470733a2f2f63646e2e706978616261792e636f6d2f70686f746f2f323031362f30342f31332f30372f31382f626c756562657272792d313332363135345f313238302e6a7067, 'Blåbær', 'Bær plukket i skauen', 'Tor Dal', '2019-05-08'),
(2, 1, 'Arrangementer', 'Bilde titel', 0x68747470733a2f2f63646e2e706978616261792e636f6d2f70686f746f2f323031362f30342f31332f30372f31382f626c756562657272792d313332363135345f313238302e6a7067, 'Blåbær', 'Bær plukket i skauen', 'Tor Dal', '2019-05-05'),
(3, 1, 'Arrangementer', 'Bilde titel', 0x68747470733a2f2f63646e2e706978616261792e636f6d2f70686f746f2f323031362f30342f31332f30372f31382f626c756562657272792d313332363135345f313238302e6a7067, 'Blåbær', 'Bær plukket i skauen', 'Tor Dal', '2019-05-05'),
(4, 6, 'Bildebank', 'Familie bilde', 0x68747470733a2f2f63646e2e706978616261792e636f6d2f70686f746f2f323031362f30362f32382f30322f31352f726574726f2d313438333738315f313238302e6a7067, 'Familie bilder', 'Gammle familie bilder ifra Tore Dal', 'Tore Dal', '2019-05-05'),
(5, 6, 'Bildebank', 'Familie bilde', 0x68747470733a2f2f63646e2e706978616261792e636f6d2f70686f746f2f323031362f30362f32382f30322f31352f726574726f2d313438333738315f313238302e6a7067, 'Familie bilder', 'Gammle familie bilder ifra Tore Dal', 'Tore Dal', '2019-05-05'),
(6, 6, 'Bildebank', 'Familie bilde', 0x68747470733a2f2f63646e2e706978616261792e636f6d2f70686f746f2f323031362f30362f32382f30322f31352f726574726f2d313438333738315f313238302e6a7067, 'Familie bilder', 'Gammle familie bilder ifra Tore Dal', 'Tore Dal', '2019-05-05'),
(7, 6, 'Bildebank', 'Familie bilde', 0x68747470733a2f2f63646e2e706978616261792e636f6d2f70686f746f2f323031362f30362f32382f30322f31352f726574726f2d313438333738315f313238302e6a7067, 'Familie bilder', 'Gammle familie bilder ifra Tore Dal', 'Tore Dal', '2019-05-05'),
(8, 5, 'Bildebank', 'Familie bilde', 0x68747470733a2f2f63646e2e706978616261792e636f6d2f70686f746f2f323031382f30382f31362f31322f34312f6368757263682d333631303334395f313238302e6a7067, 'Kirke', 'BIlde av en kirke', 'Ingrid Knapp', '2018-05-05'),
(9, 5, 'Bildebank', 'Familie bilde', 0x68747470733a2f2f63646e2e706978616261792e636f6d2f70686f746f2f323031382f30382f31362f31322f34312f6368757263682d333631303334395f313238302e6a7067, 'Kirke', 'BIlde av en kirke', 'Ingrid Knapp', '2018-05-05'),
(10, 5, 'Bildebank', 'Familie bilde', 0x68747470733a2f2f63646e2e706978616261792e636f6d2f70686f746f2f323031382f30382f31362f31322f34312f6368757263682d333631303334395f313238302e6a7067, 'Kirke', 'BIlde av en kirke', 'Ingrid Knapp', '2018-05-05');

-- --------------------------------------------------------

--
-- Table structure for table `gallerysubcategories`
--

CREATE TABLE `gallerysubcategories` (
  `Id` int(11) NOT NULL,
  `Category` varchar(255) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Image` longblob NOT NULL,
  `Alt` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gallerysubcategories`
--

INSERT INTO `gallerysubcategories` (`Id`, `Category`, `Title`, `Image`, `Alt`) VALUES
(1, 'Arrangementer', 'Bærplukking 2019\r\n', 0x68747470733a2f2f63646e2e706978616261792e636f6d2f70686f746f2f323031352f30362f30382f31332f34322f626c7565626572726965732d3830313537315f313238302e6a7067, 'A hand holding blueberries'),
(2, 'Arrangementer', 'Dikt kveld\r\n', 0x68747470733a2f2f63646e2e706978616261792e636f6d2f70686f746f2f323031362f30392f31302f31372f31382f626f6f6b2d313635393731375f313238302e6a7067, 'Books'),
(3, 'Bildebank', 'Familie bilder\r\n', 0x68747470733a2f2f63646e2e706978616261792e636f6d2f70686f746f2f323031362f30342f30392f31322f33342f66616d696c792d616e6e6f2d313331383030315f3936305f3732302e6a7067, 'Gammle familie bilder'),
(4, 'Prestgarn', '1900-1950\r\n', 0x68747470733a2f2f63646e2e706978616261792e636f6d2f70686f746f2f323031352f30342f32312f30382f33382f6e6f727761792d3733323931365f313238302e6a7067, 'Bilde av mjøsa'),
(5, 'Prestgarn', '1950-200\r\n', 0x68747470733a2f2f63646e2e706978616261792e636f6d2f70686f746f2f323031382f30312f30362f30312f30312f6f616b2d333036343138375f313238302e6a7067, 'Bilde av blader'),
(6, 'Prestgarn', 'Familiene som bodde her\r\n', 0x68747470733a2f2f63646e2e706978616261792e636f6d2f70686f746f2f323031362f30342f30392f31382f31312f66616d696c792d616e6e6f2d313331383638325f3936305f3732302e6a7067, 'Gammle familie bilder'),
(7, 'Prestgarn', 'Familiene som bodde her\r\n', 0x68747470733a2f2f63646e2e706978616261792e636f6d2f70686f746f2f323031362f30342f30392f31382f31312f66616d696c792d616e6e6f2d313331383638325f3936305f3732302e6a7067, 'Gammle familie bilder'),
(8, 'Prestgarn', 'Familiene som bodde her\r\n', 0x68747470733a2f2f63646e2e706978616261792e636f6d2f70686f746f2f323031362f30342f30392f31382f31312f66616d696c792d616e6e6f2d313331383638325f3936305f3732302e6a7067, 'Gammle familie bilder'),
(9, 'Prestgarn', 'Familiene som bodde her\r\n', 0x68747470733a2f2f63646e2e706978616261792e636f6d2f70686f746f2f323031362f30342f30392f31382f31312f66616d696c792d616e6e6f2d313331383638325f3936305f3732302e6a7067, 'Gammle familie bilder'),
(10, 'Arrangementer', 'Konsert på prestegarden\r\n', 0x68747470733a2f2f63646e2e706978616261792e636f6d2f70686f746f2f323031352f30372f33302f31372f32342f61756469656e63652d3836383037345f313238302e6a7067, 'Bilde fra konserten, ser opp mot scenen');

-- --------------------------------------------------------

--
-- Table structure for table `partner`
--

CREATE TABLE `partner` (
  `partnerId` int(11) NOT NULL,
  `title` varchar(250) NOT NULL,
  `image` longblob,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `timeline`
--

CREATE TABLE `timeline` (
  `storyId` int(11) NOT NULL,
  `title` varchar(250) NOT NULL,
  `year` varchar(250) NOT NULL,
  `image` blob,
  `description` text NOT NULL,
  `story` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `timeline`
--

INSERT INTO `timeline` (`storyId`, `title`, `year`, `image`, `description`, `story`) VALUES
(109, 'Lorum Ipsum', '1998', 0x68747470733a2f2f696d616765732e756e73706c6173682e636f6d2f70686f746f2d313531333733353533393039392d6366366535643535396438323f69786c69623d72622d312e322e3126697869643d65794a6863484266615751694f6a45794d446439266175746f3d666f726d6174266669743d63726f7026773d3137343126713d3830, 'nature', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s w'),
(110, 'Lurom Ipsum ', '1989', 0x68747470733a2f2f696d616765732e756e73706c6173682e636f6d2f70686f746f2d313533363737303031313137342d3730613135663335626563313f69786c69623d72622d312e322e3126697869643d65794a6863484266615751694f6a45794d446439266175746f3d666f726d6174266669743d63726f7026773d3139393726713d3830, 'nature', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s w');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(50) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `username`, `password`, `email`, `role`) VALUES
(1, 'hans', '$2y$10$I.9LRDZQnH7uUiQG2gUtEeb0XM0IXn6Vmujvi0U1XyJmSkjTs.w36', 'hansolav@hotmail.com', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`eventId`);

--
-- Indexes for table `footer`
--
ALTER TABLE `footer`
  ADD PRIMARY KEY (`footerId`);

--
-- Indexes for table `gallerycategories`
--
ALTER TABLE `gallerycategories`
  ADD PRIMARY KEY (`Name`);

--
-- Indexes for table `galleryimages`
--
ALTER TABLE `galleryimages`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Category` (`Category`),
  ADD KEY `Subid` (`Subid`);

--
-- Indexes for table `gallerysubcategories`
--
ALTER TABLE `gallerysubcategories`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Category` (`Category`);

--
-- Indexes for table `partner`
--
ALTER TABLE `partner`
  ADD PRIMARY KEY (`partnerId`);

--
-- Indexes for table `timeline`
--
ALTER TABLE `timeline`
  ADD PRIMARY KEY (`storyId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `eventId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `footer`
--
ALTER TABLE `footer`
  MODIFY `footerId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `partner`
--
ALTER TABLE `partner`
  MODIFY `partnerId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `timeline`
--
ALTER TABLE `timeline`
  MODIFY `storyId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
