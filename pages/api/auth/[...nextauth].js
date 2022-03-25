import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],

  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(' ')
        .join('')
        .toLocaleLowerCase()

      session.user.uid = token.sub
      return session
    },
  },

  // theme: {
  //   logo: 'https://instagram.fcor11-1.fna.fbcdn.net/v/t51.2885-19/274200562_1312598389208790_440253267058966870_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcor11-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=WauPYBydUEUAX8RBkmx&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_GByZ2B2U2tYieoVLoZruZenr1n-1eNhZWDiNBGLB7OQ&oe=623F1C88&_nc_sid=7bff83',
  //   brandColor: '#F13287',
  //   colorScheme: 'auto',
  // },
})
