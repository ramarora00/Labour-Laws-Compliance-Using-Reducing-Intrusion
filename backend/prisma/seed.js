import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Check if the user already exists, then create if not
  const existingUser = await prisma.user.findUnique({
    where: { email: 'admin@demo.com' },
  });

  if (!existingUser) {
    await prisma.user.create({
      data: {
        name: 'Admin User',
        email: 'admin@demo.com',
        passwordHash: '$2b$10$abcdefghijklmnopqrstuv',
        role: 'ADMIN'
      }
    });
  }

  // Seed some laws
  const laws = [
    {
      title: 'Factories Act, 1948',
      sectionId: 'Section 7A',
      text: 'Sample text for Factories Act section (demo).',
      summary: 'Applies to factories, provisions for worker welfare.'
    },
    {
      title: 'Payment of Wages Act, 1936',
      sectionId: 'Section 5',
      text: 'Sample text for Payment of Wages.',
      summary: 'Provisions on timely payment of wages.'
    },
    {
      title: 'Minimum Wages Act, 1948',
      sectionId: 'Section 3',
      text: 'Sample text for Minimum wages.',
      summary: 'Fixes minimum wages for different categories.'
    }
  ];

  for (const l of laws) {
    await prisma.law.upsert({
      where: { title: l.title },  // Now `title` is unique
      update: {},  // Empty update
      create: l
    });
  }

  console.log('Seed complete');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
