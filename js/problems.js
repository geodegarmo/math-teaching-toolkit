/* Problem bank for the Spiral Do-Now generator.
   Each topic: { id, name, course, domain, problems: [{q, a}] }
*/
const PROBLEM_BANK = [
  {
    id: 'integers',
    name: 'Integer & Rational Operations',
    course: 'Math 8',
    domain: 'Number',
    problems: [
      { q: 'Evaluate: −3 + (−7) × 2 ÷ (−2)', a: '4' },
      { q: 'Simplify: (−5)² − 3(−2 + 7)', a: '10' },
      { q: 'What is −²⁄₃ × (−³⁄₄)?', a: '½' },
      { q: 'Order least to greatest: −0.5, −³⁄₄, 0.2, −¹⁄₃', a: '−³⁄₄, −½, −¹⁄₃, 0.2' },
      { q: 'Evaluate: |−8| − |3 − 10|', a: '1' },
      { q: 'Simplify: −4(3 − 8) + (−2)³', a: '12' },
      { q: 'What is the additive inverse of −⁵⁄₆?', a: '⁵⁄₆' },
      { q: 'Evaluate: (−2)⁴ ÷ (−2)', a: '−8' }
    ]
  },
  {
    id: 'exponents',
    name: 'Exponent Rules',
    course: 'Math 8',
    domain: 'Expressions & Equations',
    problems: [
      { q: 'Simplify: x³ · x⁵', a: 'x⁸' },
      { q: 'Simplify: (2³)²', a: '64' },
      { q: 'What is 5⁰? Why?', a: '1 — each step divides by 5, so 5¹÷5 = 1' },
      { q: 'Simplify: x⁶ ÷ x²', a: 'x⁴' },
      { q: 'What is 2⁻³?', a: '¹⁄₈' },
      { q: 'Simplify: (3x²y)²', a: '9x⁴y²' },
      { q: 'Simplify: (xy²)³', a: 'x³y⁶' },
      { q: 'Write with positive exponents: 4x⁻²y³', a: '4y³ / x²' }
    ]
  },
  {
    id: 'sci-notation',
    name: 'Scientific Notation',
    course: 'Math 8',
    domain: 'Expressions & Equations',
    problems: [
      { q: 'Write 0.00042 in scientific notation.', a: '4.2 × 10⁻⁴' },
      { q: 'Write 3.7 × 10⁵ in standard form.', a: '370,000' },
      { q: 'Calculate: (2 × 10³)(4 × 10²)', a: '8 × 10⁵' },
      { q: 'Fix: 42 × 10³ is not in proper form. Rewrite it.', a: '4.2 × 10⁴' },
      { q: 'Which is larger: 3.1 × 10⁴ or 8.2 × 10³?', a: '3.1 × 10⁴' },
      { q: 'Calculate: (6 × 10⁸) ÷ (2 × 10⁵)', a: '3 × 10³' },
      { q: 'A proton has mass 1.67 × 10⁻²⁷ kg. An electron is 1,840× lighter. Write the electron\'s mass in sci. notation.', a: '≈ 9.1 × 10⁻³¹ kg' }
    ]
  },
  {
    id: 'linear-eq',
    name: 'Linear Equations (1 variable)',
    course: 'Math 8',
    domain: 'Expressions & Equations',
    problems: [
      { q: 'Solve: 3x − 7 = 14', a: 'x = 7' },
      { q: 'Solve: 2(x + 3) = 5x − 9', a: 'x = 5' },
      { q: 'Solve: x/4 + 2 = 6', a: 'x = 16' },
      { q: 'How many solutions: 3x + 6 = 3(x + 2)?', a: 'Infinitely many — it\'s always true' },
      { q: 'How many solutions: 2x + 1 = 2x + 5?', a: 'No solution — no x satisfies it' },
      { q: 'Solve for y: 2x + 3y = 12', a: 'y = (12 − 2x) / 3' },
      { q: 'Solve: 0.5x − 3 = 1', a: 'x = 8' },
      { q: 'A number plus three times itself equals 24. Find the number.', a: '6' }
    ]
  },
  {
    id: 'slope',
    name: 'Slope & Rate of Change',
    course: 'Math 8',
    domain: 'Functions',
    problems: [
      { q: 'Find the slope through (2, 5) and (6, 13).', a: 'm = 2' },
      { q: 'A line has slope −3 and passes through (0, 4). Write its equation.', a: 'y = −3x + 4' },
      { q: 'Table: x: 0,1,2,3 | y: 5,8,11,14. What is the rate of change?', a: '3 per unit' },
      { q: 'Which is steeper: slope of ²⁄₃ or ³⁄₄?', a: '³⁄₄ (larger absolute value)' },
      { q: 'A car travels 60 mph. After t hours, d = 60t. What is the slope and what does it mean?', a: '60 — the car covers 60 miles each hour' },
      { q: 'Two points: (−1, 4) and (3, 4). What is the slope?', a: '0 (horizontal line)' },
      { q: 'Find the slope: x: 2, 4, 6 | y: 10, 7, 4', a: '−1.5' }
    ]
  },
  {
    id: 'functions8',
    name: 'Functions & Function Notation',
    course: 'Math 8',
    domain: 'Functions',
    problems: [
      { q: 'Is {(1,2),(2,3),(2,4),(3,5)} a function? Why?', a: 'No — x = 2 maps to two different y-values' },
      { q: 'If f(x) = 2x − 1, find f(4).', a: '7' },
      { q: 'f(3) = 10 and f(3) = 7 — is this possible for a function?', a: 'No — each input has exactly one output' },
      { q: 'Complete: f(x) = x² − 1 for x = −2, −1, 0, 1, 2.', a: '3, 0, −1, 0, 3' },
      { q: 'A function takes any input and doubles it then subtracts 5. Write the rule.', a: 'f(x) = 2x − 5' },
      { q: 'If g(x) = −x + 6, find g(−3).', a: '9' },
      { q: 'Which table defines y as a function of x? A: x: 1,2,3 y: 4,5,6 — B: x: 1,1,2 y: 3,4,5', a: 'Table A — Table B repeats x = 1 with different outputs' }
    ]
  },
  {
    id: 'pythagorean',
    name: 'Pythagorean Theorem',
    course: 'Math 8',
    domain: 'Geometry',
    problems: [
      { q: 'Find c: legs are 6 and 8.', a: '10' },
      { q: 'Find the missing leg: hypotenuse = 13, one leg = 5.', a: '12' },
      { q: 'Is a triangle with sides 5, 7, 9 a right triangle?', a: 'No — 5² + 7² = 74 ≠ 81 = 9²' },
      { q: 'A 10-ft ladder leans against a wall 6 ft from the base. How high up the wall?', a: '8 ft' },
      { q: 'Find the distance between (1, 2) and (5, 5).', a: '5 units' },
      { q: 'A rectangle is 9 cm × 12 cm. Find the diagonal.', a: '15 cm' },
      { q: 'Legs are 7 and 24. Is the hypotenuse rational?', a: 'Yes — c = 25' }
    ]
  },
  {
    id: 'transformations',
    name: 'Transformations',
    course: 'Math 8',
    domain: 'Geometry',
    problems: [
      { q: 'Translate (3, −1) by (x + 2, y − 3). New point?', a: '(5, −4)' },
      { q: 'Reflect (2, 5) over the y-axis.', a: '(−2, 5)' },
      { q: 'Rotate (3, 0) 90° clockwise about the origin.', a: '(0, −3)' },
      { q: 'A dilation with scale factor 3 maps (2, 4) to ___?', a: '(6, 12)' },
      { q: 'After a dilation with factor 2, angles ___ and side lengths ___.', a: 'Stay the same; double' },
      { q: 'Which transformation preserves congruence but NOT similarity with a different ratio? ', a: 'Dilation (changes size)' },
      { q: 'Reflect (−3, 4) over the x-axis.', a: '(−3, −4)' }
    ]
  },
  {
    id: 'volume',
    name: 'Volume (Cones, Cylinders, Spheres)',
    course: 'Math 8',
    domain: 'Geometry',
    problems: [
      { q: 'Find the volume of a cylinder: radius 3, height 5. Leave in terms of π.', a: '45π' },
      { q: 'Find the volume of a cone: radius 4, height 6. Leave in terms of π.', a: '32π' },
      { q: 'Sphere with radius 3 — find its volume in terms of π.', a: '36π' },
      { q: 'A cylinder and cone share the same base and height. Cylinder volume = 24π. Cone volume?', a: '8π (one-third of the cylinder)' },
      { q: 'A can has diameter 8 cm and height 10 cm. Find its volume to the nearest cm³.', a: '≈ 503 cm³' },
      { q: 'A cone has volume 50π and height 6. Find the radius.', a: 'r = 5' }
    ]
  },
  {
    id: 'systems',
    name: 'Systems of Equations',
    course: 'Math 8',
    domain: 'Expressions & Equations',
    problems: [
      { q: 'Solve: y = 2x + 1 and y = −x + 7.', a: '(2, 5)' },
      { q: 'How many solutions: y = 3x + 2 and y = 3x − 5?', a: 'No solution — parallel lines' },
      { q: 'How many solutions: 2y = 4x + 6 and y = 2x + 3?', a: 'Infinitely many — same line' },
      { q: 'Solve by substitution: x + y = 10 and x − y = 4.', a: 'x = 7, y = 3' },
      { q: 'Two numbers sum to 20; one is 4 more than the other. Find them.', a: '8 and 12' },
      { q: 'Graph the system y = x − 1 and y = −2x + 5. Where do they intersect?', a: '(2, 1)' }
    ]
  },
  {
    id: 'scatter',
    name: 'Scatter Plots & Statistics',
    course: 'Math 8',
    domain: 'Statistics & Probability',
    problems: [
      { q: 'What association would you expect: hours studied vs. test score?', a: 'Positive association' },
      { q: 'r = −0.85 — describe this correlation.', a: 'Strong negative' },
      { q: 'Line of best fit: y = 3x + 40. Predict y when x = 10.', a: '70' },
      { q: 'Two students have the same x-value but different y-values on a scatter plot. Is this allowed?', a: 'Yes — scatter plots do not require a function' },
      { q: 'A two-way table shows 40 of 100 students prefer pizza. P(pizza) = ?', a: '0.4 or 40%' },
      { q: 'What does r ≈ 0 mean in a scatter plot?', a: 'Little to no linear association' }
    ]
  },
  /* ── Math 1 topics ── */
  {
    id: 'lin-expressions',
    name: 'Linear Expressions & Equations',
    course: 'Math 1',
    domain: 'Algebra',
    problems: [
      { q: 'Simplify: 3(2x − 4) − 5(x + 1)', a: 'x − 17' },
      { q: 'Solve: 4(x − 2) = 3(x + 1) + 5', a: 'x = 16' },
      { q: 'Factor: 6x² + 9x', a: '3x(2x + 3)' },
      { q: 'Solve for x in terms of a, b, c: ax + b = c', a: 'x = (c − b) / a' },
      { q: 'Write an expression for "5 less than twice a number n."', a: '2n − 5' },
      { q: 'If P = 2l + 2w, solve for w.', a: 'w = (P − 2l) / 2' },
      { q: 'Solve: ³⁄₄x − 2 = 7', a: 'x = 12' }
    ]
  },
  {
    id: 'factoring',
    name: 'Factoring Quadratics',
    course: 'Math 1',
    domain: 'Algebra',
    problems: [
      { q: 'Factor: x² + 7x + 12', a: '(x + 3)(x + 4)' },
      { q: 'Factor: x² − 9 (difference of squares)', a: '(x + 3)(x − 3)' },
      { q: 'Factor: x² − 5x + 6', a: '(x − 2)(x − 3)' },
      { q: 'Factor: 2x² + 5x + 3', a: '(2x + 3)(x + 1)' },
      { q: 'Expand: (x + 4)²', a: 'x² + 8x + 16' },
      { q: 'Factor: x² − 4x − 12', a: '(x − 6)(x + 2)' },
      { q: 'Factor: 3x² − 12', a: '3(x + 2)(x − 2)' }
    ]
  },
  {
    id: 'quad-equations',
    name: 'Solving Quadratic Equations',
    course: 'Math 1',
    domain: 'Algebra',
    problems: [
      { q: 'Solve by factoring: x² − 5x + 6 = 0', a: 'x = 2 or x = 3' },
      { q: 'Solve: x² = 25', a: 'x = ±5' },
      { q: 'Solve: (x − 3)(x + 2) = 0', a: 'x = 3 or x = −2' },
      { q: 'Solve by factoring: x² + 2x − 8 = 0', a: 'x = 2 or x = −4' },
      { q: 'Use the quadratic formula: x² − 4x + 1 = 0', a: 'x = 2 ± √3' },
      { q: 'A ball\'s height: h = −16t² + 64t. When does it land? (h = 0)', a: 't = 0 or t = 4 seconds' }
    ]
  },
  {
    id: 'lin-functions',
    name: 'Linear Functions',
    course: 'Math 1',
    domain: 'Functions',
    problems: [
      { q: 'Find the slope and y-intercept of y = −2x + 5.', a: 'm = −2, b = 5' },
      { q: 'Write the equation through (0, 3) with slope 2.', a: 'y = 2x + 3' },
      { q: 'f(x) = 3x − 1. Find f(5).', a: '14' },
      { q: 'Write the equation through (2, 5) and (6, 13).', a: 'y = 2x + 1' },
      { q: 'A taxi charges $3 base + $2.50/mile. Write f(m).', a: 'f(m) = 2.50m + 3' },
      { q: 'Find the x-intercept of y = 4x − 12.', a: 'x = 3' },
      { q: 'Two lines: y = 2x + 1 and y = 2x − 4. Parallel, perpendicular, or neither?', a: 'Parallel — same slope, different y-intercept' }
    ]
  },
  {
    id: 'exp-functions',
    name: 'Exponential Functions',
    course: 'Math 1',
    domain: 'Functions',
    problems: [
      { q: 'Evaluate f(x) = 2 · 3ˣ at x = 3.', a: '54' },
      { q: 'A population of 500 grows 4%/year. Write P(t).', a: 'P(t) = 500(1.04)ᵗ' },
      { q: 'Is y = 5(0.8)ˣ growth or decay?', a: 'Decay — base 0.8 < 1' },
      { q: 'Fill in: f(x) = 2ˣ for x = −1, 0, 1, 2, 3.', a: '½, 1, 2, 4, 8' },
      { q: 'At what x does f(x) = 3ˣ equal 81?', a: 'x = 4' },
      { q: 'A car worth $24,000 depreciates 15%/year. Value after 3 years?', a: '$24,000(0.85)³ ≈ $14,700' },
      { q: 'What is the y-intercept of f(x) = 6 · 2ˣ?', a: '6 (the initial value)' }
    ]
  },
  {
    id: 'quad-functions',
    name: 'Quadratic Functions',
    course: 'Math 1',
    domain: 'Functions',
    problems: [
      { q: 'Find the vertex of y = x² − 4x + 3.', a: '(2, −1)' },
      { q: 'What is the axis of symmetry of y = 2x² − 8x + 1?', a: 'x = 2' },
      { q: 'Does y = −x² + 4 open up or down?', a: 'Down — a < 0' },
      { q: 'For y = (x − 3)² + 2, what is the vertex?', a: '(3, 2)' },
      { q: 'What are the x-intercepts of y = x² − x − 6?', a: 'x = 3 and x = −2' },
      { q: 'What is the minimum value of y = x² + 2x + 5?', a: '4, at vertex (−1, 4)' },
      { q: 'A parabola has vertex (2, −3) and opens up. Write in vertex form.', a: 'y = a(x − 2)² − 3 for any a > 0' }
    ]
  },
  {
    id: 'function-families',
    name: 'Identifying Function Families',
    course: 'Math 1',
    domain: 'Functions',
    problems: [
      { q: 'Table: x: 0,1,2,3 | y: 1,3,9,27. Linear, exponential, or quadratic?', a: 'Exponential — constant ratio of 3' },
      { q: 'Table: x: 0,1,2,3 | y: 4,7,10,13. What type?', a: 'Linear — constant first difference of 3' },
      { q: 'Table: x: 0,1,2,3 | y: 0,1,4,9. What type?', a: 'Quadratic — constant second difference of 2' },
      { q: 'Which grows faster for large x: f(x) = 50x + 100 or g(x) = 2ˣ?', a: 'g(x) = 2ˣ (exponential always wins)' },
      { q: 'y = 4x + 1: what are the domain and range?', a: 'Both are all real numbers' },
      { q: 'The second differences in a table are constant at 4. What family?', a: 'Quadratic — a = 2 (second diff = 2a)' }
    ]
  },
  {
    id: 'statistics1',
    name: 'Statistics & Regression',
    course: 'Math 1',
    domain: 'Statistics',
    problems: [
      { q: 'Find the mean: {4, 8, 6, 7, 10}', a: '7' },
      { q: 'Find the median: {3, 7, 5, 9, 1}', a: '5' },
      { q: 'What does r = 0.92 tell you?', a: 'Strong positive linear correlation' },
      { q: 'Regression line: y = 1.5x + 3. Predict y when x = 8.', a: '15' },
      { q: 'Data: 2, 4, 6, 8, 10. Find the IQR.', a: 'Q3 − Q1 = 8 − 4 = 4' },
      { q: 'A data set has mean 50 and standard deviation 5. What range captures ~68% of data?', a: '45 to 55' },
      { q: 'Two data sets have the same mean but set B has a larger standard deviation. What does that mean?', a: 'Set B has more spread / variability' }
    ]
  }
];
