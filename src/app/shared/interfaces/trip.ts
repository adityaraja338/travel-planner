export interface Trip {
  start: string;  // Full name from user input
  end: string;    // Full name from user input
  shortStart?: string; // The first 3 chars (computed)
  shortEnd?: string;   // The first 3 chars (computed)
  level?: number;      // Which level to display the line (1 or 2)
  lineType?: 'straight' | 'arrow'; // Type of line to display
}
