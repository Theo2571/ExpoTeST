import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { Lesson } from '../types/lesson';
import { LESSONS_DATA } from '../data/lessons';
import { MESSAGES } from '../constants/messages';
import { COLORS, SPACING, TYPOGRAPHY } from '../constants/theme';
import LessonItem from './LessonItem';

export default function GrowthMap() {
  const handleLessonPress = (lesson: Lesson) => {
    if (lesson.status === 'active') {
      console.log('Start lesson');
    } else if (lesson.status === 'locked') {
      Alert.alert(
        MESSAGES.lockedTitle,
        MESSAGES.lockedDescription,
        [{ text: MESSAGES.okButton }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{MESSAGES.headerTitle}</Text>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {LESSONS_DATA.map((lesson, index) => {
          const previousLesson = index > 0 ? LESSONS_DATA[index - 1] : null;
          const isPreviousLocked = previousLesson?.status === 'locked';

          return (
            <LessonItem
              key={lesson.id}
              lesson={lesson}
              isFirst={index === 0}
              isPreviousLocked={isPreviousLocked}
              onPress={handleLessonPress}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: SPACING.headerTop,
  },
  header: {
    fontSize: TYPOGRAPHY.header.fontSize,
    fontWeight: TYPOGRAPHY.header.fontWeight,
    color: COLORS.text.primary,
    textAlign: 'center',
    marginBottom: SPACING.lg,
    paddingHorizontal: SPACING.md,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.xl,
  },
});
