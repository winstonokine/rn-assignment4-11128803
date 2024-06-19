import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const JobCard = ({ title, company, salary, location, icon }) => (
  <View style={styles.card}>
    <Image source={icon} style={styles.cardIcon} />
    <View style={styles.cardTextContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardCompany}>{company}</Text>
      <Text style={styles.cardSalary}>{salary}</Text>
      <Text style={styles.cardLocation}>{location}</Text>
    </View>
  </View>
);

const HomeScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { name, email } = route.params;
  
  const jobCards = [
    { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', icon: require('./assets/facebook.png') },
    { id: '2', title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', icon: require('./assets/burger-king.png') },
    { id: '3', title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US', icon: require('./assets/beatselectronic.png') },
    { id: '4', title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', icon: require('./assets/facebook.png') },
    { id: '5', title: 'Data Scientist', company: 'Google', salary: '$120,000/y', location: 'New York, US', icon: require('./assets/google.png') },
    { id: '6', title: 'DevOps Engineer', company: 'Amazon', salary: '$110,000/y', location: 'Seattle, US', icon: require('./assets/amazon.png') },
    { id: '8', title: 'Full Stack Developer', company: 'Netflix', salary: '$130,000/y', location: 'Los Gatos, US', icon: require('./assets/netflix.png') },
    { id: '7', title: 'Backend Developer', company: 'Microsoft', salary: '$105,000/y', location: 'Redmond, US', icon: require('./assets/microsoft.png') },
    { id: '9', title: 'UI/UX Designer', company: 'Apple', salary: '$95,000/y', location: 'San Francisco, US', icon: require('./assets/Apple.png') },
    { id: '10', title: 'AI Engineer', company: 'Tesla', salary: '$140,000/y', location: 'Palo Alto, US', icon: require('./assets/tesla.png') },
    { id: '11', title: 'Blockchain Developer', company: 'Coinbase', salary: '$150,000/y', location: 'San Francisco, US', icon: require('./assets/coinbase.png') },
    { id: '12', title: 'Mobile Developer', company: 'Spotify', salary: '$115,000/y', location: 'Stockholm, SE', icon: require('./assets/spotify.png') },
    { id: '13', title: 'Game Developer', company: 'Riot Games', salary: '$125,000/y', location: 'Los Angeles, US', icon: require('./assets/riotgames.png') },
    { id: '14', title: 'Data Analyst', company: 'Airbnb', salary: '$110,000/y', location: 'San Francisco, US', icon: require('./assets/airbnb.png') },
    { id: '15', title: 'Cloud Engineer', company: 'Oracle', salary: '$100,000/y', location: 'Redwood City, US', icon: require('./assets/oracle.png') },
    { id: '16', title: 'Cybersecurity Expert', company: 'IBM', salary: '$120,000/y', location: 'Armonk, US', icon: require('./assets/ibm.jpeg') },
  ];

  const featuredJobs = jobCards.slice(0, 6);
  const popularJobs = jobCards.slice(6, 12);

  const [showAllFeatured, setShowAllFeatured] = useState(false);
  const [showAllPopular, setShowAllPopular] = useState(false);

  const renderItem = ({ item }) => (
    <JobCard
      title={item.title}
      company={item.company}
      salary={item.salary}
      location={item.location}
      icon={item.icon}
    />
  );

  const handleSeeAllFeatured = () => {
    setShowAllFeatured(!showAllFeatured);
  };

  const handleSeeAllPopular = () => {
    setShowAllPopular(!showAllPopular);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Image source={require('./assets/profilepic.jpg')} style={styles.profilePic} />
      </View>
      <View style={styles.searchContainer}>
        <Image source={require('./assets/search.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search a job or position"
        />
        <Image source={require('./assets/filter.png')} style={styles.filterIcon} />
      </View>
      <View style={styles.jobSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Jobs</Text>
          <TouchableOpacity onPress={handleSeeAllFeatured}>
            <Text style={styles.seeAll}>{showAllFeatured ? 'Show less' : 'See all'}</Text>
          </TouchableOpacity>
        </View>
        {showAllFeatured ? (
          <FlatList
            data={jobCards}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            style={styles.verticalList}
            contentContainerStyle={styles.cardContainerVertical}
          />
        ) : (
          <FlatList
            data={featuredJobs}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.list}
            contentContainerStyle={styles.cardContainer}
          />
        )}
      </View>
      <View style={styles.jobSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Jobs</Text>
          <TouchableOpacity onPress={handleSeeAllPopular}>
            <Text style={styles.seeAll}>{showAllPopular ? 'Show less' : 'See all'}</Text>
          </TouchableOpacity>
        </View>
        {showAllPopular ? (
          <FlatList
            data={jobCards}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={1}
            showsVerticalScrollIndicator={true}
            style={styles.verticalList}
            contentContainerStyle={styles.cardContainerVertical}
          />
        ) : (
          <FlatList
            data={popularJobs}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={1}
            showsVerticalScrollIndicator={true}
            style={styles.verticalList}
            contentContainerStyle={styles.cardContainerVertical}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F9FC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E2D3D',
  },
  email: {
    fontSize: 16,
    color: '#9AA5B1',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderColor: '#E4E7EB',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    height: 50,
  },
  searchBar: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#1E2D3D',
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  jobSection: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E2D3D',
  },
  seeAll: {
    fontSize: 14,
    color: '#007BFF',
  },
  list: {
    marginBottom: 20,
  },
  cardContainer: {
    paddingBottom: 20,
  },
  cardContainerVertical: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFF',
    borderColor: '#E4E7EB',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: width * 0.9, // Adjust width for single-column layout
  },
  verticalList: {
    flexDirection: 'column',
  },
  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 10,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E2D3D',
  },
  cardCompany: {
    fontSize: 14,
    color: '#9AA5B1',
  },
  cardSalary: {
    fontSize: 14,
    color: '#1E2D3D',
  },
  cardLocation: {
    fontSize: 14,
    color: '#1E2D3D',
  },
});

export default HomeScreen;
