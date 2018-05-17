import bcrypt


pass1="Iluvkittens"
hash_ps = bcrypt.hashpw(pass1.encode('utf-8'), bcrypt.gensalt())
print("what is sent to the DB on register:", hash_ps)

MAHPASS = "Iluvpuppies"
GOODPASS = "Iluvkittens"

maybe = bcrypt.checkpw(MAHPASS.encode('utf-8'), hash_ps)

print("NO!", maybe)

shouldbe = bcrypt.checkpw(GOODPASS.encode('utf-8'), hash_ps)

print("Should work:", shouldbe)

lulwut = bcrypt.checkpw(GOODPASS.encode('utf-8'), hash_ps)

print("WHATTTTT:", lulwut)