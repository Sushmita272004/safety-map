export function calculateSafetyScore({ crime, night, lighting }) {
  return crime * 0.5 + night * 0.3 + lighting * 0.2;
}
