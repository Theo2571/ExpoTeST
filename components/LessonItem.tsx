import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Lesson } from '../types/lesson';
import { LESSON_ICON_CONFIG, LESSON_STYLE_CONFIG } from '../utils/lessonConfig';
import { COLORS, SPACING, SIZES, TYPOGRAPHY, SHADOWS } from '../constants/theme';
import { MESSAGES } from '../constants/messages';

interface LessonItemProps {
  lesson: Lesson;
  isFirst: boolean;
  isPreviousLocked: boolean;
  onPress: (lesson: Lesson) => void;
}

export default function LessonItem({
  lesson,
  isFirst,
  isPreviousLocked,
  onPress,
}: LessonItemProps) {
  const iconConfig = LESSON_ICON_CONFIG[lesson.status];
  const styleConfig = LESSON_STYLE_CONFIG[lesson.status];
  const isClickable = lesson.status === 'active' || lesson.status === 'locked';

  return (
    <View style={styles.wrapper}>
      {!isFirst && (
        <View
          style={[
            styles.connector,
            (isPreviousLocked || lesson.status === 'locked') && styles.connectorLocked,
          ]}
        />
      )}
      <TouchableOpacity
        style={[
          styles.item,
          {
            backgroundColor: styleConfig.backgroundColor,
            borderLeftColor: styleConfig.borderColor,
            opacity: styleConfig.opacity ?? 1,
          },
          lesson.status === 'active' && styles.itemActive,
        ]}
        onPress={() => onPress(lesson)}
        disabled={!isClickable}
        activeOpacity={isClickable ? 0.7 : 1}
      >
        <View
          style={[
            styles.iconContainer,
            iconConfig.backgroundColor && {
              backgroundColor: iconConfig.backgroundColor,
              borderRadius: SIZES.borderRadius.lg,
            },
          ]}
        >
          <Ionicons
            name={iconConfig.name}
            size={SIZES.icon}
            color={iconConfig.color}
          />
        </View>
        <Text
          style={[styles.title, { color: styleConfig.textColor }]}
          numberOfLines={2}
        >
          {lesson.title}
        </Text>
        {lesson.status === 'active' && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{MESSAGES.startButton}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    marginBottom: SPACING.sm,
  },
  connector: {
    position: 'absolute',
    left: SPACING.md,
    top: -SIZES.connectorHeight,
    width: SIZES.connectorWidth,
    height: SIZES.connectorHeight,
    backgroundColor: COLORS.connector.active,
    zIndex: 0,
  },
  connectorLocked: {
    backgroundColor: COLORS.connector.locked,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: SIZES.borderRadius.sm,
    padding: SPACING.md,
    borderLeftWidth: SIZES.borderWidth,
    minHeight: SIZES.minLessonHeight,
    shadowColor: SHADOWS.card.shadowColor,
    shadowOffset: SHADOWS.card.shadowOffset,
    shadowOpacity: SHADOWS.card.shadowOpacity,
    shadowRadius: SHADOWS.card.shadowRadius,
    elevation: SHADOWS.card.elevation,
  },
  itemActive: {
    shadowColor: SHADOWS.activeCard.shadowColor,
    shadowOffset: SHADOWS.activeCard.shadowOffset,
    shadowOpacity: SHADOWS.activeCard.shadowOpacity,
    shadowRadius: SHADOWS.activeCard.shadowRadius,
    elevation: SHADOWS.activeCard.elevation,
  },
  iconContainer: {
    marginRight: SPACING.md,
    width: SIZES.iconContainer,
    height: SIZES.iconContainer,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: TYPOGRAPHY.lessonTitle.fontSize,
    fontWeight: TYPOGRAPHY.lessonTitle.fontWeight,
  },
  badge: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
    paddingVertical: SPACING.xs + 2,
    borderRadius: SIZES.borderRadius.md,
    marginLeft: SPACING.sm,
  },
  badgeText: {
    fontSize: TYPOGRAPHY.badge.fontSize,
    fontWeight: TYPOGRAPHY.badge.fontWeight,
    color: COLORS.status.active,
  },
});

