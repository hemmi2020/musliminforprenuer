import bcrypt from 'bcryptjs';
import connectDB from '../../../../lib/db';
import User from '../../../../lib/models/User';

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    await connectDB();

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json({ message: 'Un utilisateur avec cet email existe déjà' }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = await User.create({
      name,
      email,
      hashedPassword,
    });

    return Response.json({ message: 'Compte créé avec succès' }, { status: 201 });
  } catch (error) {
    return Response.json({ message: 'Erreur serveur' }, { status: 500 });
  }
}