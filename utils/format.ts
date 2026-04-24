/**
 * Format a number as Indian Rupees (₹).
 * Example: 45000 → "₹45,000"
 */
export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

/**
 * Calculate discount percentage between original and current price.
 * Returns 0 if no discount or invalid inputs.
 */
export function getDiscountPercent(price: number, originalPrice: number): number {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

/**
 * Convert a string to a URL-friendly slug.
 * Example: "Kitchen Equipment" → "kitchen-equipment"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
