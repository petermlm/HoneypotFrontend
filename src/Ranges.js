export const Ranges = {
  Year: 1,
  Month: 2,
  Week: 3,
  Day: 4,
  Hour: 5,
};

export function rangeToString(range) {
  switch(range) {
    case Ranges.Year: return "Year";
    case Ranges.Month: return "Month";
    case Ranges.Week: return "Week";
    case Ranges.Day: return "Day";
    case Ranges.Hour: return "Hour";
    default: return "";
  }
}

export function rangeToAPIRepr(range) {
  switch(range) {
    case Ranges.Year: return "y";
    case Ranges.Month: return "mo";
    case Ranges.Week: return "w";
    case Ranges.Day: return "d";
    case Ranges.Hour: return "h";
    default: return "";
  }
}

