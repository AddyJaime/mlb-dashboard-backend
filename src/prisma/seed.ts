import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  // ================================
  // 🏟️ STADIUMS (6–10)
  // ================================
  await prisma.stadium.createMany({
    data: [
      {
        id: 6,
        name: "Citi Field",
        name_team: "New York Mets",
        city: "New York",
        description: "Home of the Mets since 2009.",
        state: "NY",
        league: "NL",
        capacity: 41922,
        year_open: 2009,
        longitude: -73.8458,
        latitude: 40.7571,
        image_url: "https://example.com/citi.jpg",
        left_field_ft: 335,
        center_field_ft: 408,
        right_field_ft: 330,
        total_games: 1200,
        home_win_percentage: 0.52,
        perfect_games: 1,
      },
      {
        id: 7,
        name: "Minute Maid Park",
        name_team: "Houston Astros",
        city: "Houston",
        description: "Home of the Astros.",
        state: "TX",
        league: "AL",
        capacity: 41168,
        year_open: 2000,
        longitude: -95.3555,
        latitude: 29.7573,
        image_url: "https://example.com/minute.jpg",
        left_field_ft: 315,
        center_field_ft: 409,
        right_field_ft: 326,
        total_games: 1300,
        home_win_percentage: 0.55,
        perfect_games: 2,
      },


      {
        id: 8,
        name: "Truist Park",
        name_team: "Atlanta Braves",
        city: "Atlanta",
        description: "Home of the Braves.",
        state: "GA",
        league: "NL",
        capacity: 41084,
        year_open: 2017,
        longitude: -84.3895,
        latitude: 33.8908,
        image_url: "https://example.com/truist.jpg",
        left_field_ft: 335,
        center_field_ft: 400,
        right_field_ft: 325,
        total_games: 900,
        home_win_percentage: 0.57,
        perfect_games: 1,
      },

      {
        id: 9,
        name: "Busch Stadium",
        name_team: "St. Louis Cardinals",
        city: "St Louis",
        description: "Home of Cardinals.",
        state: "MO",
        league: "NL",
        capacity: 45494,
        year_open: 2006,
        longitude: -90.193,
        latitude: 38.6226,
        image_url: "https://example.com/busch.jpg",
        left_field_ft: 336,
        center_field_ft: 400,
        right_field_ft: 335,
        total_games: 1400,
        home_win_percentage: 0.54,
        perfect_games: 2,
      },

      {
        id: 10,
        name: "Coors Field",
        name_team: "Colorado Rockies",
        city: "Denver",
        description: "High altitude stadium.",
        state: "CO",
        league: "NL",
        capacity: 50144,
        year_open: 1995,
        longitude: -104.9942,
        latitude: 39.7559,
        image_url: "https://example.com/coors.jpg",
        left_field_ft: 347,
        center_field_ft: 415,
        right_field_ft: 350,
        total_games: 1500,
        home_win_percentage: 0.50,
        perfect_games: 0,
      },
      {
  id: 11,
  name: "T-Mobile Park",
  name_team: "Seattle Mariners",
  city: "Seattle",
  description: "Home of the Mariners.",
  state: "WA",
  league: "AL",
  capacity: 47929,
  year_open: 1999,
  longitude: -122.3321,
  latitude: 47.5914,
  image_url: "https://example.com/tmobile.jpg",
  left_field_ft: 331,
  center_field_ft: 401,
  right_field_ft: 326,
  total_games: 1400,
  home_win_percentage: 0.51,
  perfect_games: 1,
},

{
  id: 12,
  name: "Globe Life Field",
  name_team: "Texas Rangers",
  city: "Arlington",
  description: "Home of the Rangers.",
  state: "TX",
  league: "AL",
  capacity: 40300,
  year_open: 2020,
  longitude: -97.082,
  latitude: 32.7473,
  image_url: "https://example.com/globe.jpg",
  left_field_ft: 329,
  center_field_ft: 407,
  right_field_ft: 326,
  total_games: 400,
  home_win_percentage: 0.53,
  perfect_games: 1,
},

{
  id: 13,
  name: "Angel Stadium",
  name_team: "Los Angeles Angels",
  city: "Anaheim",
  description: "Home of the Angels.",
  state: "CA",
  league: "AL",
  capacity: 45517,
  year_open: 1966,
  longitude: -117.8827,
  latitude: 33.8003,
  image_url: "https://example.com/angel.jpg",
  left_field_ft: 347,
  center_field_ft: 396,
  right_field_ft: 350,
  total_games: 5000,
  home_win_percentage: 0.52,
  perfect_games: 1,
},

{
  id: 14,
  name: "Petco Park",
  name_team: "San Diego Padres",
  city: "San Diego",
  description: "Home of the Padres.",
  state: "CA",
  league: "NL",
  capacity: 40209,
  year_open: 2004,
  longitude: -117.1573,
  latitude: 32.7073,
  image_url: "https://example.com/petco.jpg",
  left_field_ft: 336,
  center_field_ft: 396,
  right_field_ft: 322,
  total_games: 1200,
  home_win_percentage: 0.53,
  perfect_games: 0,
},

{
  id: 15,
  name: "Chase Field",
  name_team: "Arizona Diamondbacks",
  city: "Phoenix",
  description: "Retractable roof stadium.",
  state: "AZ",
  league: "NL",
  capacity: 48519,
  year_open: 1998,
  longitude: -112.0667,
  latitude: 33.4453,
  image_url: "https://example.com/chase.jpg",
  left_field_ft: 330,
  center_field_ft: 407,
  right_field_ft: 335,
  total_games: 1500,
  home_win_percentage: 0.52,
  perfect_games: 0,
},

{
  id: 16,
  name: "Rogers Centre",
  name_team: "Toronto Blue Jays",
  city: "Toronto",
  description: "Home of the Blue Jays.",
  state: "ON",
  league: "AL",
  capacity: 49286,
  year_open: 1989,
  longitude: -79.3891,
  latitude: 43.6414,
  image_url: "https://example.com/rogers.jpg",
  left_field_ft: 328,
  center_field_ft: 400,
  right_field_ft: 328,
  total_games: 4000,
  home_win_percentage: 0.51,
  perfect_games: 1,
},

{
  id: 17,
  name: "Kauffman Stadium",
  name_team: "Kansas City Royals",
  city: "Kansas City",
  description: "Home of the Royals.",
  state: "MO",
  league: "AL",
  capacity: 37903,
  year_open: 1973,
  longitude: -94.4803,
  latitude: 39.0517,
  image_url: "https://example.com/kauffman.jpg",
  left_field_ft: 330,
  center_field_ft: 410,
  right_field_ft: 330,
  total_games: 4200,
  home_win_percentage: 0.50,
  perfect_games: 1,
},

{
  id: 18,
  name: "Target Field",
  name_team: "Minnesota Twins",
  city: "Minneapolis",
  description: "Home of the Twins.",
  state: "MN",
  league: "AL",
  capacity: 38544,
  year_open: 2010,
  longitude: -93.2783,
  latitude: 44.9817,
  image_url: "https://example.com/target.jpg",
  left_field_ft: 339,
  center_field_ft: 404,
  right_field_ft: 328,
  total_games: 900,
  home_win_percentage: 0.52,
  perfect_games: 0,
},

{
  id: 19,
  name: "Guaranteed Rate Field",
  name_team: "Chicago White Sox",
  city: "Chicago",
  description: "Home of the White Sox.",
  state: "IL",
  league: "AL",
  capacity: 40615,
  year_open: 1991,
  longitude: -87.6339,
  latitude: 41.83,
  image_url: "https://example.com/grf.jpg",
  left_field_ft: 330,
  center_field_ft: 400,
  right_field_ft: 335,
  total_games: 3000,
  home_win_percentage: 0.51,
  perfect_games: 0,
},

{
  id: 20,
  name: "Comerica Park",
  name_team: "Detroit Tigers",
  city: "Detroit",
  description: "Home of the Tigers.",
  state: "MI",
  league: "AL",
  capacity: 41083,
  year_open: 2000,
  longitude: -83.0485,
  latitude: 42.339,
  image_url: "https://example.com/comerica.jpg",
  left_field_ft: 345,
  center_field_ft: 420,
  right_field_ft: 330,
  total_games: 2500,
  home_win_percentage: 0.50,
  perfect_games: 0,
},
{
  id: 21,
  name: "Progressive Field",
  name_team: "Cleveland Guardians",
  city: "Cleveland",
  description: "Home of the Guardians.",
  state: "OH",
  league: "AL",
  capacity: 35041,
  year_open: 1994,
  longitude: -81.6852,
  latitude: 41.4962,
  image_url: "https://example.com/progressive.jpg",
  left_field_ft: 325,
  center_field_ft: 400,
  right_field_ft: 325,
  total_games: 3000,
  home_win_percentage: 0.52,
  perfect_games: 0,
},

{
  id: 22,
  name: "PNC Park",
  name_team: "Pittsburgh Pirates",
  city: "Pittsburgh",
  description: "Home of the Pirates.",
  state: "PA",
  league: "NL",
  capacity: 38362,
  year_open: 2001,
  longitude: -80.0057,
  latitude: 40.4469,
  image_url: "https://example.com/pnc.jpg",
  left_field_ft: 325,
  center_field_ft: 399,
  right_field_ft: 320,
  total_games: 2000,
  home_win_percentage: 0.49,
  perfect_games: 0,
},

{
  id: 23,
  name: "Citizens Bank Park",
  name_team: "Philadelphia Phillies",
  city: "Philadelphia",
  description: "Home of the Phillies.",
  state: "PA",
  league: "NL",
  capacity: 42792,
  year_open: 2004,
  longitude: -75.1665,
  latitude: 39.9061,
  image_url: "https://example.com/citizens.jpg",
  left_field_ft: 329,
  center_field_ft: 401,
  right_field_ft: 330,
  total_games: 2000,
  home_win_percentage: 0.53,
  perfect_games: 1,
},

{
  id: 24,
  name: "LoanDepot Park",
  name_team: "Miami Marlins",
  city: "Miami",
  description: "Home of the Marlins.",
  state: "FL",
  league: "NL",
  capacity: 36742,
  year_open: 2012,
  longitude: -80.2197,
  latitude: 25.7781,
  image_url: "https://example.com/loan.jpg",
  left_field_ft: 344,
  center_field_ft: 407,
  right_field_ft: 335,
  total_games: 800,
  home_win_percentage: 0.48,
  perfect_games: 0,
},

{
  id: 25,
  name: "Nationals Park",
  name_team: "Washington Nationals",
  city: "Washington",
  description: "Home of the Nationals.",
  state: "DC",
  league: "NL",
  capacity: 41339,
  year_open: 2008,
  longitude: -77.0075,
  latitude: 38.873,
  image_url: "https://example.com/nationals.jpg",
  left_field_ft: 336,
  center_field_ft: 402,
  right_field_ft: 335,
  total_games: 1200,
  home_win_percentage: 0.52,
  perfect_games: 1,
},

{
  id: 26,
  name: "Oriole Park at Camden Yards",
  name_team: "Baltimore Orioles",
  city: "Baltimore",
  description: "Historic ballpark.",
  state: "MD",
  league: "AL",
  capacity: 45971,
  year_open: 1992,
  longitude: -76.6217,
  latitude: 39.2839,
  image_url: "https://example.com/camden.jpg",
  left_field_ft: 333,
  center_field_ft: 410,
  right_field_ft: 318,
  total_games: 3000,
  home_win_percentage: 0.51,
  perfect_games: 1,
},

{
  id: 27,
  name: "Tropicana Field",
  name_team: "Tampa Bay Rays",
  city: "St Petersburg",
  description: "Indoor stadium.",
  state: "FL",
  league: "AL",
  capacity: 25000,
  year_open: 1990,
  longitude: -82.6534,
  latitude: 27.7682,
  image_url: "https://example.com/trop.jpg",
  left_field_ft: 315,
  center_field_ft: 404,
  right_field_ft: 322,
  total_games: 2500,
  home_win_percentage: 0.53,
  perfect_games: 0,
},

{
  id: 28,
  name: "Oakland Coliseum",
  name_team: "Oakland Athletics",
  city: "Oakland",
  description: "Multi-purpose stadium.",
  state: "CA",
  league: "AL",
  capacity: 46847,
  year_open: 1966,
  longitude: -122.2005,
  latitude: 37.7516,
  image_url: "https://example.com/oakland.jpg",
  left_field_ft: 330,
  center_field_ft: 400,
  right_field_ft: 330,
  total_games: 5000,
  home_win_percentage: 0.50,
  perfect_games: 1,
},

{
  id: 29,
  name: "American Family Field",
  name_team: "Milwaukee Brewers",
  city: "Milwaukee",
  description: "Retractable roof stadium.",
  state: "WI",
  league: "NL",
  capacity: 41900,
  year_open: 2001,
  longitude: -87.9712,
  latitude: 43.028,
  image_url: "https://example.com/brewers.jpg",
  left_field_ft: 344,
  center_field_ft: 400,
  right_field_ft: 345,
  total_games: 2000,
  home_win_percentage: 0.52,
  perfect_games: 0,
},

{
  id: 30,
  name: "Great American Ball Park",
  name_team: "Cincinnati Reds",
  city: "Cincinnati",
  description: "Home of the Reds.",
  state: "OH",
  league: "NL",
  capacity: 42319,
  year_open: 2003,
  longitude: -84.5061,
  latitude: 39.0979,
  image_url: "https://example.com/reds.jpg",
  left_field_ft: 328,
  center_field_ft: 404,
  right_field_ft: 325,
  total_games: 2000,
  home_win_percentage: 0.51,
  perfect_games: 0,
},
    ],
    skipDuplicates: true,
  });

    // ================================
  //  ATTENACE (4–30)
  // ================================

await prisma.attendance.createMany({
  data: [
    // ======================
    // Stadium 4 (Wrigley)
    // ======================
    { stadium_id: 4, year: 2020, total_attendance: 0, perfect_games: 0 }, // covid year
    { stadium_id: 4, year: 2021, total_attendance: 2800000, perfect_games: 0 },
    { stadium_id: 4, year: 2022, total_attendance: 3000000, perfect_games: 1 },
    { stadium_id: 4, year: 2023, total_attendance: 3200000, perfect_games: 0 },
    { stadium_id: 4, year: 2024, total_attendance: 3300000, perfect_games: 0 },
    { stadium_id: 4, year: 2025, total_attendance: 3400000, perfect_games: 1 },

    // ======================
    // Stadium 5 (Oracle)
    // ======================
    { stadium_id: 5, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 5, year: 2021, total_attendance: 2500000, perfect_games: 0 },
    { stadium_id: 5, year: 2022, total_attendance: 2700000, perfect_games: 0 },
    { stadium_id: 5, year: 2023, total_attendance: 2900000, perfect_games: 1 },
    { stadium_id: 5, year: 2024, total_attendance: 3000000, perfect_games: 0 },
    { stadium_id: 5, year: 2025, total_attendance: 3100000, perfect_games: 1 },

    // ======================
    // Stadium 6 (Citi Field)
    // ======================
    { stadium_id: 6, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 6, year: 2021, total_attendance: 2100000, perfect_games: 0 },
    { stadium_id: 6, year: 2022, total_attendance: 2300000, perfect_games: 0 },
    { stadium_id: 6, year: 2023, total_attendance: 2500000, perfect_games: 1 },
    { stadium_id: 6, year: 2024, total_attendance: 2600000, perfect_games: 0 },
    { stadium_id: 6, year: 2025, total_attendance: 2700000, perfect_games: 1 },
    
     // ======================
    // Stadium 7 (Astros)
    // ======================
    { stadium_id: 7, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 7, year: 2021, total_attendance: 2200000, perfect_games: 0 },
    { stadium_id: 7, year: 2022, total_attendance: 2400000, perfect_games: 0 },
    { stadium_id: 7, year: 2023, total_attendance: 2600000, perfect_games: 1 },
    { stadium_id: 7, year: 2024, total_attendance: 2700000, perfect_games: 0 },
    { stadium_id: 7, year: 2025, total_attendance: 2800000, perfect_games: 1 },

    // ======================
    // Stadium 8 (Braves)
    // ======================
    { stadium_id: 8, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 8, year: 2021, total_attendance: 2300000, perfect_games: 0 },
    { stadium_id: 8, year: 2022, total_attendance: 2500000, perfect_games: 0 },
    { stadium_id: 8, year: 2023, total_attendance: 2700000, perfect_games: 1 },
    { stadium_id: 8, year: 2024, total_attendance: 2800000, perfect_games: 0 },
    { stadium_id: 8, year: 2025, total_attendance: 2900000, perfect_games: 1 },

    // ======================
    // Stadium 9 (Cardinals)
    // ======================
    { stadium_id: 9, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 9, year: 2021, total_attendance: 2400000, perfect_games: 0 },
    { stadium_id: 9, year: 2022, total_attendance: 2600000, perfect_games: 0 },
    { stadium_id: 9, year: 2023, total_attendance: 2800000, perfect_games: 1 },
    { stadium_id: 9, year: 2024, total_attendance: 2900000, perfect_games: 0 },
    { stadium_id: 9, year: 2025, total_attendance: 3000000, perfect_games: 1 },
    // ======================
    // Stadium 10 (Coors Field)
    // ======================
    { stadium_id: 10, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 10, year: 2021, total_attendance: 2000000, perfect_games: 0 },
    { stadium_id: 10, year: 2022, total_attendance: 2200000, perfect_games: 0 },
    { stadium_id: 10, year: 2023, total_attendance: 2400000, perfect_games: 1 },
    { stadium_id: 10, year: 2024, total_attendance: 2500000, perfect_games: 0 },
    { stadium_id: 10, year: 2025, total_attendance: 2600000, perfect_games: 1 },

    // ======================
    // Stadium 11 (Mariners)
    // ======================
    { stadium_id: 11, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 11, year: 2021, total_attendance: 2100000, perfect_games: 0 },
    { stadium_id: 11, year: 2022, total_attendance: 2300000, perfect_games: 0 },
    { stadium_id: 11, year: 2023, total_attendance: 2500000, perfect_games: 1 },
    { stadium_id: 11, year: 2024, total_attendance: 2600000, perfect_games: 0 },
    { stadium_id: 11, year: 2025, total_attendance: 2700000, perfect_games: 1 },

    // ======================
    // Stadium 12 (Rangers)
    // ======================
    { stadium_id: 12, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 12, year: 2021, total_attendance: 2200000, perfect_games: 0 },
    { stadium_id: 12, year: 2022, total_attendance: 2400000, perfect_games: 0 },
    { stadium_id: 12, year: 2023, total_attendance: 2600000, perfect_games: 1 },
    { stadium_id: 12, year: 2024, total_attendance: 2700000, perfect_games: 0 },
    { stadium_id: 12, year: 2025, total_attendance: 2800000, perfect_games: 1 },
    // ======================
    // Stadium 13 (Angels)
    // ======================
    { stadium_id: 13, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 13, year: 2021, total_attendance: 2300000, perfect_games: 0 },
    { stadium_id: 13, year: 2022, total_attendance: 2500000, perfect_games: 0 },
    { stadium_id: 13, year: 2023, total_attendance: 2700000, perfect_games: 1 },
    { stadium_id: 13, year: 2024, total_attendance: 2800000, perfect_games: 0 },
    { stadium_id: 13, year: 2025, total_attendance: 2900000, perfect_games: 1 },

    // ======================
    // Stadium 14 (Padres)
    // ======================
    { stadium_id: 14, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 14, year: 2021, total_attendance: 2100000, perfect_games: 0 },
    { stadium_id: 14, year: 2022, total_attendance: 2300000, perfect_games: 0 },
    { stadium_id: 14, year: 2023, total_attendance: 2500000, perfect_games: 1 },
    { stadium_id: 14, year: 2024, total_attendance: 2600000, perfect_games: 0 },
    { stadium_id: 14, year: 2025, total_attendance: 2700000, perfect_games: 1 },

    // ======================
    // Stadium 15 (Diamondbacks)
    // ======================
    { stadium_id: 15, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 15, year: 2021, total_attendance: 2000000, perfect_games: 0 },
    { stadium_id: 15, year: 2022, total_attendance: 2200000, perfect_games: 0 },
    { stadium_id: 15, year: 2023, total_attendance: 2400000, perfect_games: 1 },
    { stadium_id: 15, year: 2024, total_attendance: 2500000, perfect_games: 0 },
    { stadium_id: 15, year: 2025, total_attendance: 2600000, perfect_games: 1 },
    // ======================
    // Stadium 16 (Blue Jays)
    // ======================
    { stadium_id: 16, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 16, year: 2021, total_attendance: 2100000, perfect_games: 0 },
    { stadium_id: 16, year: 2022, total_attendance: 2300000, perfect_games: 0 },
    { stadium_id: 16, year: 2023, total_attendance: 2500000, perfect_games: 1 },
    { stadium_id: 16, year: 2024, total_attendance: 2600000, perfect_games: 0 },
    { stadium_id: 16, year: 2025, total_attendance: 2700000, perfect_games: 1 },

    // ======================
    // Stadium 17 (Royals)
    // ======================
    { stadium_id: 17, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 17, year: 2021, total_attendance: 1900000, perfect_games: 0 },
    { stadium_id: 17, year: 2022, total_attendance: 2100000, perfect_games: 0 },
    { stadium_id: 17, year: 2023, total_attendance: 2300000, perfect_games: 1 },
    { stadium_id: 17, year: 2024, total_attendance: 2400000, perfect_games: 0 },
    { stadium_id: 17, year: 2025, total_attendance: 2500000, perfect_games: 1 },

    // ======================
    // Stadium 18 (Twins)
    // ======================
    { stadium_id: 18, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 18, year: 2021, total_attendance: 2000000, perfect_games: 0 },
    { stadium_id: 18, year: 2022, total_attendance: 2200000, perfect_games: 0 },
    { stadium_id: 18, year: 2023, total_attendance: 2400000, perfect_games: 1 },
    { stadium_id: 18, year: 2024, total_attendance: 2500000, perfect_games: 0 },
    { stadium_id: 18, year: 2025, total_attendance: 2600000, perfect_games: 1 },
    // ======================
    // Stadium 19 (White Sox)
    // ======================
    { stadium_id: 19, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 19, year: 2021, total_attendance: 1800000, perfect_games: 0 },
    { stadium_id: 19, year: 2022, total_attendance: 2000000, perfect_games: 0 },
    { stadium_id: 19, year: 2023, total_attendance: 2200000, perfect_games: 1 },
    { stadium_id: 19, year: 2024, total_attendance: 2300000, perfect_games: 0 },
    { stadium_id: 19, year: 2025, total_attendance: 2400000, perfect_games: 1 },

    // ======================
    // Stadium 20 (Tigers)
    // ======================
    { stadium_id: 20, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 20, year: 2021, total_attendance: 1900000, perfect_games: 0 },
    { stadium_id: 20, year: 2022, total_attendance: 2100000, perfect_games: 0 },
    { stadium_id: 20, year: 2023, total_attendance: 2300000, perfect_games: 1 },
    { stadium_id: 20, year: 2024, total_attendance: 2400000, perfect_games: 0 },
    { stadium_id: 20, year: 2025, total_attendance: 2500000, perfect_games: 1 },

    // ======================
    // Stadium 21 (Guardians)
    // ======================
    { stadium_id: 21, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 21, year: 2021, total_attendance: 1800000, perfect_games: 0 },
    { stadium_id: 21, year: 2022, total_attendance: 2000000, perfect_games: 0 },
    { stadium_id: 21, year: 2023, total_attendance: 2200000, perfect_games: 1 },
    { stadium_id: 21, year: 2024, total_attendance: 2300000, perfect_games: 0 },
    { stadium_id: 21, year: 2025, total_attendance: 2400000, perfect_games: 1 },

    // ======================
    // Stadium 22 (Pirates)
    // ======================
    { stadium_id: 22, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 22, year: 2021, total_attendance: 1700000, perfect_games: 0 },
    { stadium_id: 22, year: 2022, total_attendance: 1900000, perfect_games: 0 },
    { stadium_id: 22, year: 2023, total_attendance: 2100000, perfect_games: 1 },
    { stadium_id: 22, year: 2024, total_attendance: 2200000, perfect_games: 0 },
    { stadium_id: 22, year: 2025, total_attendance: 2300000, perfect_games: 1 },

    // ======================
    // Stadium 23 (Phillies)
    // ======================
    { stadium_id: 23, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 23, year: 2021, total_attendance: 2000000, perfect_games: 0 },
    { stadium_id: 23, year: 2022, total_attendance: 2200000, perfect_games: 0 },
    { stadium_id: 23, year: 2023, total_attendance: 2400000, perfect_games: 1 },
    { stadium_id: 23, year: 2024, total_attendance: 2500000, perfect_games: 0 },
    { stadium_id: 23, year: 2025, total_attendance: 2600000, perfect_games: 1 },

    // ======================
    // Stadium 24 (Marlins)
    // ======================
    { stadium_id: 24, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 24, year: 2021, total_attendance: 1500000, perfect_games: 0 },
    { stadium_id: 24, year: 2022, total_attendance: 1700000, perfect_games: 0 },
    { stadium_id: 24, year: 2023, total_attendance: 1900000, perfect_games: 1 },
    { stadium_id: 24, year: 2024, total_attendance: 2000000, perfect_games: 0 },
    { stadium_id: 24, year: 2025, total_attendance: 2100000, perfect_games: 1 },
     // ======================
    // Stadium 25 (Nationals)
    // ======================
    { stadium_id: 25, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 25, year: 2021, total_attendance: 1800000, perfect_games: 0 },
    { stadium_id: 25, year: 2022, total_attendance: 2000000, perfect_games: 0 },
    { stadium_id: 25, year: 2023, total_attendance: 2200000, perfect_games: 1 },
    { stadium_id: 25, year: 2024, total_attendance: 2300000, perfect_games: 0 },
    { stadium_id: 25, year: 2025, total_attendance: 2400000, perfect_games: 1 },

    // ======================
    // Stadium 26 (Orioles)
    // ======================
    { stadium_id: 26, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 26, year: 2021, total_attendance: 2000000, perfect_games: 0 },
    { stadium_id: 26, year: 2022, total_attendance: 2200000, perfect_games: 0 },
    { stadium_id: 26, year: 2023, total_attendance: 2400000, perfect_games: 1 },
    { stadium_id: 26, year: 2024, total_attendance: 2500000, perfect_games: 0 },
    { stadium_id: 26, year: 2025, total_attendance: 2600000, perfect_games: 1 },

    // ======================
    // Stadium 27 (Rays)
    // ======================
    { stadium_id: 27, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 27, year: 2021, total_attendance: 1400000, perfect_games: 0 },
    { stadium_id: 27, year: 2022, total_attendance: 1600000, perfect_games: 0 },
    { stadium_id: 27, year: 2023, total_attendance: 1800000, perfect_games: 1 },
    { stadium_id: 27, year: 2024, total_attendance: 1900000, perfect_games: 0 },
    { stadium_id: 27, year: 2025, total_attendance: 2000000, perfect_games: 1 },

    // ======================
    // Stadium 28 (Athletics)
    // ======================
    { stadium_id: 28, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 28, year: 2021, total_attendance: 1600000, perfect_games: 0 },
    { stadium_id: 28, year: 2022, total_attendance: 1800000, perfect_games: 0 },
    { stadium_id: 28, year: 2023, total_attendance: 2000000, perfect_games: 1 },
    { stadium_id: 28, year: 2024, total_attendance: 2100000, perfect_games: 0 },
    { stadium_id: 28, year: 2025, total_attendance: 2200000, perfect_games: 1 },

    // ======================
    // Stadium 29 (Brewers)
    // ======================
    { stadium_id: 29, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 29, year: 2021, total_attendance: 1800000, perfect_games: 0 },
    { stadium_id: 29, year: 2022, total_attendance: 2000000, perfect_games: 0 },
    { stadium_id: 29, year: 2023, total_attendance: 2200000, perfect_games: 1 },
    { stadium_id: 29, year: 2024, total_attendance: 2300000, perfect_games: 0 },
    { stadium_id: 29, year: 2025, total_attendance: 2400000, perfect_games: 1 },

    // ======================
    // Stadium 30 (Reds)
    // ======================
    { stadium_id: 30, year: 2020, total_attendance: 0, perfect_games: 0 },
    { stadium_id: 30, year: 2021, total_attendance: 1900000, perfect_games: 0 },
    { stadium_id: 30, year: 2022, total_attendance: 2100000, perfect_games: 0 },
    { stadium_id: 30, year: 2023, total_attendance: 2300000, perfect_games: 1 },
    { stadium_id: 30, year: 2024, total_attendance: 2400000, perfect_games: 0 },
    { stadium_id: 30, year: 2025, total_attendance: 2500000, perfect_games: 1 },

  ],
  skipDuplicates: true,
});


}

main()
  .then(async () => {
    console.log("Seed executed")
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.log("Error in seeding")
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })























