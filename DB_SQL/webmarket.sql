-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : dim. 16 jan. 2022 à 11:55
-- Version du serveur : 10.4.19-MariaDB
-- Version de PHP : 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `webmarket`
--

-- --------------------------------------------------------

--
-- Structure de la table `annonces`
--

CREATE TABLE `annonces` (
  `id` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `image1` varchar(100) DEFAULT NULL,
  `image2` varchar(100) DEFAULT NULL,
  `image3` varchar(100) DEFAULT NULL,
  `ville` varchar(100) DEFAULT NULL,
  `categorie` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `annonces`
--

INSERT INTO `annonces` (`id`, `id_user`, `title`, `description`, `email`, `phone`, `image1`, `image2`, `image3`, `ville`, `categorie`) VALUES
(23, 5, 'iphone 11 pro', 'iphone 11 pro ,85% battery ', 'izsz@jjs.com', '0258845588', 'download.jpeg', 'iphone-12-frandroid-2020.png', 'iphone-12-max-frandroid-2020.png', 'Safi', 'INFORMATIQUE ET MULTIMEDIA'),
(25, 5, 'Voiture Audi', 'audi modele 2020\nprix :100000 DH', 'iuyedh@jue.com', '0658228758', 'download (1).jpeg', 'audi-a3-prix-2020-01.jpg', 'images.jpeg', 'Agadir', 'VEHICULES'),
(26, 5, 'vetement', 'vetement 2022', 'vetement@uhujs.com', '0654895814', 'les-Francais-achetent-moins-de-vetements-deconsommation-Pixabay.jpg', 'les-Francais-achetent-moins-de-vetements-deconsommation-Pixabay.jpg', 'les-Francais-achetent-moins-de-vetements-deconsommation-Pixabay.jpg', 'Kénitra', 'HABILLEMENT ET BIEN ETRE'),
(27, 5, 'survette 2022', 'survette 2022\nprix 300 DH', 'iuiyzs@ghs.com', '063235887', '41vCmU0dlhL._SL500_.jpg', '41vCmU0dlhL._SL500_.jpg', '41vCmU0dlhL._SL500_.jpg', 'Fès', 'HABILLEMENT ET BIEN ETRE'),
(28, 6, 'iphone 12', 'jjfszxajuhygj', 'uhys@', '0284585', 'download.jpeg', 'iphone-12-frandroid-2020.png', 'iphone-12-max-frandroid-2020.png', 'El Jadida', 'INFORMATIQUE ET MULTIMEDIA'),
(29, 6, 'jacket ', 'uhuyhsx', 'hhys@uys', '0588542', 'WhatsApp Image 2021-08-29 at 14.43.55.jpeg', 'WhatsApp Image 2021-08-29 at 14.43.57.jpeg', 'WhatsApp Image 2021-08-29 at 14.43.57 (1).jpeg', 'Khouribga', 'HABILLEMENT ET BIEN ETRE');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id` int(11) NOT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telephone` varchar(50) DEFAULT NULL,
  `ville` varchar(50) DEFAULT NULL,
  `motDepasse` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `prenom`, `nom`, `email`, `telephone`, `ville`, `motDepasse`) VALUES
(3, 'Ayoub', 'Mansouri', 'ayoub@gmail.com', '0632236881', 'Casablanca', '12'),
(4, 'Ayoub', 'Mansouri', 'ayoubmns11@gmail.com', '0632236881', 'Casablanca', '12'),
(5, 'Ayoub', 'Mansouri', 'ayoub1@gmail.com', '0632236881', 'Casablanca', '12'),
(6, 'Ayoub', 'Mansouri', 'ayoubmn21@gmail.com', '0632236881', 'Casablanca', '12');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `annonces`
--
ALTER TABLE `annonces`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `annonces`
--
ALTER TABLE `annonces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `annonces`
--
ALTER TABLE `annonces`
  ADD CONSTRAINT `annonces_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `utilisateur` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
