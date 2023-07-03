
puts "seeding"

# test for profile query
User.create(
    email: "tosh@gmail.com",
    name: "Tosh",
    phone: "123456789",
    password: "Password1.",
    date_of_birth: "1990-01-01",
    reason_for_joining: 1,
    isMuslim: true,

)

puts "Done seeding"