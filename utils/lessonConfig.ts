import { LessonStatus } from '../types/lesson';
import { COLORS } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export interface LessonIconConfig {
  name: keyof typeof Ionicons.glyphMap;
  color: string;
  backgroundColor?: string;
}

export interface LessonStyleConfig {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  opacity?: number;
}

export const LESSON_ICON_CONFIG: Record<LessonStatus, LessonIconConfig> = {
  done: {
    name: 'checkmark-circle',
    color: COLORS.status.done,
  },
  active: {
    name: 'play-circle',
    color: COLORS.white,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  locked: {
    name: 'lock-closed',
    color: COLORS.text.disabled,
  },
};

export const LESSON_STYLE_CONFIG: Record<LessonStatus, LessonStyleConfig> = {
  done: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.border.done,
    textColor: COLORS.text.primary,
  },
  active: {
    backgroundColor: COLORS.status.active,
    borderColor: COLORS.border.active,
    textColor: COLORS.white,
  },
  locked: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.border.locked,
    textColor: COLORS.text.secondary,
    opacity: 0.6,
  },
};

