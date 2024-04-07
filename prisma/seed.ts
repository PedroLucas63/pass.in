import { prisma } from "../src/lib/prisma";
async function seed() {
   await prisma.event.create({
      data: {
         id: "4c4d9831-a453-466b-bfab-b369c39a3835",
         title: "Unite Summit",
         slug: "unite-summit",
         details: "Um evento p/ devs apaixonados(as) por códigos!",
         maximumAttendees: 120,
      },
   });
}

seed().then(() => {
   console.log("Database seeded.");
   prisma.$disconnect();
});
