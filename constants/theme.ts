export const COLORS = {
  background: '#F5F5F5',
  white: '#FFFFFF',
  text: {
    primary: '#212121',
    secondary: '#757575',
    disabled: '#9E9E9E',
  },
  status: {
    done: '#4CAF50',
    active: '#2196F3',
    activeDark: '#1976D2',
    locked: '#9E9E9E',
  },
  border: {
    done: '#4CAF50',
    active: '#1976D2',
    locked: '#9E9E9E',
  },
  connector: {
    active: '#4CAF50',
    locked: '#E0E0E0',
  },
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 40,
  headerTop: 60,
} as const;

export const SIZES = {
  icon: 32,
  iconContainer: 40,
  borderRadius: {
    sm: 12,
    md: 16,
    lg: 20,
  },
  borderWidth: 4,
  connectorWidth: 2,
  connectorHeight: 8,
  minLessonHeight: 72,
} as const;

export const TYPOGRAPHY = {
  header: {
    fontSize: 28,
    fontWeight: 'bold' as const,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
  },
  badge: {
    fontSize: 12,
    fontWeight: '700' as const,
  },
} as const;

export const SHADOWS = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  activeCard: {
    shadowColor: '#2196F3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
} as const;

