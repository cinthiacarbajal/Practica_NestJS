import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Limpiando datos existentes...');
  await prisma.user.deleteMany();
  await prisma.tenant.deleteMany();

  console.log('Creando tenants...');
  // Como Tenant solo tiene id, se crea el registro vacío para que genere el ID 1 y 2
  const tenant1 = await prisma.tenant.create({ data: {} });
  const tenant2 = await prisma.tenant.create({ data: {} });

  console.log('Creando usuarios...');
  const hashedPassword = await bcrypt.hash('password123', 10);

  await prisma.user.create({
    data: {
      email: 'admin@techsolutions.com',
      name: 'Admin User',
      password: hashedPassword,
      telephone: '+1-555-0181',
      role: 'ADMIN' as any,
      tenantId: tenant1.id, // Se enlaza al id del tenant creado
    },
  });

  await prisma.user.create({
    data: {
      email: 'user@techsolutions.com',
      name: 'John Developer',
      password: hashedPassword,
      telephone: '+1-555-0102',
      role: 'USER' as any,
      tenantId: tenant1.id,
    },
  });

  console.log('¡Seeding finalizado con éxito!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });