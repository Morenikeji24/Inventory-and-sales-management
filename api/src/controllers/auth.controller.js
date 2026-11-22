import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma.js";

export const registerStaff = async (req, res) => {
  const { firstName, middleName, lastName, email, password, phone } = req.body;
  const user = await prisma.staff.create({
    data: {
      firstName,
      middleName,
      lastName,
      email,
      phone,
      password: await bcrypt.hash(password, 10),
    },
  });
  res.status(201).json({ user: user });
};

export const registerCustomer = async (req, res) => {
  const { firstName, middleName, lastName, email, password, phone } = req.body;
  const createdBy = req.params.id;
};

export const loginStaff = async (req, res) => {};

export const currentUser = async (req, res) => {};
