import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { useRouter } from 'expo-router';

interface Movie {
  title: string;
  image: ImageSourcePropType; // allows local or remote images
  path: string;
}

interface CategoryListProps {
  category: string;
  movies?: Movie[];
}

const CategoryList: React.FC<CategoryListProps> = ({ category, movies = [] }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>{category}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map((movie) => (
          <TouchableOpacity
            key={movie.path}
            onPress={() => router.push(`/filmes/${movie.path}`)}
            accessibilityLabel={`Go to details for ${movie.title}`}
          >
            <View style={styles.movieCard}>
              <Image source={movie.image} style={styles.image} />
              <Text style={styles.title}>{movie.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
    marginBottom: 5,
  },
  movieCard: {
    marginRight: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default CategoryList;
