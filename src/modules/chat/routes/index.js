const Chat = lazy(() => import('../views'))

export default [
    {
        path: '/apps/chat',
        element: <Chat />,
        meta: {
          appLayout: true,
          className: 'chat-application'
        }
    }
]