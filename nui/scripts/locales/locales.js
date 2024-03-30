const Locales = {
    EN: {
        os_lang: "English",
        os_language: "Language",
        os_language_selection: "Select the language to set for the system.",
        os_cancel: "Cancel",
        os_close: "Close",
        os_boot: "Starting up...",
        os_shutdown: "Shutdown",
        os_shuttingdown: "Shutting down...",
        os_shutdown_confirmation: "You are about to shutdown the computer, are you sure?",
        os_shutdown_forced: "Shutdown forced (too far from open position)...",
        os_error: "Error",
        os_fake_error: "Unknown error: can't open {1}.exe",
        os_session: "Initializing a new session...",
        os_refresh: "Refresh",
        os_create: "Create",
        os_delete: "Delete",
        os_title: "Title",
        os_description: "Description",

        date_format: "en-US",

        cmd_unknown: "This command does not exist.<br>Try 'help' to list all available commands.",
        cmd_help_desc: "display all available commands.",
        cmd_version_desc: "display current version.",
        cmd_clear_desc: "clear console output.",
        cmd_exit_desc: "exit command prompt.",
        cmd_shutdown_desc: "shutdown computer.",
        cmd_start_desc: "start an application.<br>    Usage: start [app]",
        cmd_started: "Application '{1}.exe' has been started.",
        cmd_start_error: "Unknown application '{1}.exe'.",
        cmd_start_not_specified: "You have to specify an application.<br>    Usage: start [app]",
        cmd_start_already: "Application '{1}.exe' is already running.",
        cmd_taskkill_desc: "kill an application.<br>    Usage: taskkill [app]",
        cmd_taskkilled: "Application '{1}.exe' has been killed.",
        cmd_taskkill_error: "Application '{1}.exe' isn't running.",
        cmd_taskkill_not_specified: "You have to specify an application.<br>    Usage: taskkill [app]",
        cmd_iptracer_desc: "get information about specified IP address.<br>    Usage: ip-tracer [IPv4]",
        cmd_iptracer_not_specified: "You have to specify an IP address.<br>    Usage: ip-tracer [IPv4]",
        cmd_iptracer_error: "The IP address is incorrect, it should look like 11.22.33.44.",
        cmd_iptracer_result: `IP address > <span style='color:green'>{1}</span>
        <br>Date & Time > <span style='color:green'>{2}</span>
        <br>Zone > <span style='color:green'>{3}</span>
        <br>Latitude > <span style='color:green'>{4}</span>
        <br>Longitude > <span style='color:green'>{5}</span>
        <br>Location > <span style='color:green'>{6}</span>
        <br><span style='color:red'>GPS set.</span>`,
        cmd_iptracer_disconnected: "IP address {1} is <span style='color:red'>disconnected</span> from the network.",
        cmd_netscan_desc: "scan network.",
        cmd_connect_desc: "access to domain.<br>    Usage: connect [domain]",
        cmd_connect_not_specified: "You have to specify a domain name.<br>    Usage: connect [domain]",
        cmd_connect_unknown: "Unknown domain name.",
        cmd_connect_success: "Successfully connected to <span style='color:green'>{1}</span>.",
        cmd_detect_desc: "detect ip of network from your actual position.<br>    Usual usage: detect -ip",
        cmd_detect_arg: "You have to specify the detection type.<br>    Usual usage: detect -ip",
        cmd_detect_none_detected: "No IP detected near your location.",
        cmd_detect_detected: "Found address <span style='color:green'>{1}</span> at your location.",
        cmd_scan_desc: "scan things on ip address specified.<br>    Usual usage: scan -ports [ip]",
        cmd_scan_arg: "You have to specify what you want to scan.<br>    Usual usage: scan -ports [ip]",
        cmd_scan_wrong: "Can't scan ports of the given IP address.",
        cmd_scan_good: "Port <span style='color:green'>{1}</span> is open.",
        cmd_infiltrate_desc: "find and infiltrate a service on a given port and address.<br>    Usual usage: infiltrate -ip [ip] -port [open-port]",
        cmd_infiltrate_arg: "You have to specify the ip and the port.<br>    Usual usage: infiltrate -ip [ip] -port [open-port]",
        cmd_infiltrate_wrong: "Can't find any service to infiltrate on {1}:{2}",
        cmd_infiltrate_good: "Service on {1}:{2} <span style='color:green'>infiltrated</span>.",
        cmd_breach_desc: "breach data of infiltrated service.<br>    Usual usage: breach -ip [ip] -port [open-port]",
        cmd_breach_arg: "You have to specify the ip and the port.<br>    Usual usage: breach -ip [ip] -port [open-port]",
        cmd_breach_bad: "Can't find any service to breach on {1}:{2}",
        cmd_breach_no: "You have to infiltrate the service before breaching it.",
        cmd_breach_good: "Service has been breached, writing data to:<br><span style='color:crimson'>{1}</span>",
        cmd_breach_delay: "You need to wait before doing a breach on this service.",

        error_market_title: "Error creating post",
        error_market_deletion_title: "Deletion error",
        error_market_empty_arg: "The title or the description is empty.",
        error_market_arg_overflow: "Title or description exceeds the allowed size.",
        error_market_delay: "Wait between each post.",
        error_market_max: "You reached the max number of posts.",
        error_market_id: "ID is invalid.",
        error_market_id_not_yours: "This ID isn't one of your posts.",
        info_market_creation_success: "Created with success!",
        info_market_creation_success_desc: "The post has been created with success.\nRefresh the market.",
        info_market_deletion_success: "Deleted with success!",
        info_market_deletion_success_desc: "The post has been deleted with success.\nRefresh the market.",
        market_yours: "yours",
        market_post: "Post",

        info_ipv4: "IPv4:",
        info_type: "Computer type:",
        info_desktop: "Desktop",
        info_laptop: "Laptop",

        market_description: "You can create a post every {1} seconds, you can create a maximum of {2} posts. Each post will be active for {3} days.",

        mail_signin: "Sign in",
        mail_signup: "Sign up",
        mail_save: "Save inputs for next time.",
        mail_preview: "Your mail address will be {1}.",
        mail_passwords_different: "Passwords are different.",
        mail_username_taken: "This username is already used.",
        mail_account_created: "Account created!",
        mail_empty: "Username and/or password can't be empty.",
        mail_input_overflow: "Username or password exceeds the allowed size.",
        mail_password_empty: "Set a password.",
        mail_password_warning: "⚠️ WARNING: Don't put a real password!",
        mail_connect_wrong: "The account doesn't exist or the username or password is incorrect.",
        mail_signout: "Sign out",
        mail_create: "New mail",
        mail_unread: "UNREAD",
        mail_object: "Mail Object",
        mail_text: "Text...",
        mail_send: "Send",
        mail_new: "NEW",
        mail_signup_message: "No account? Sign up",
        mail_signin_message: "Already have an account? Sign in",
        mail_username: "Username",
        mail_password: "Password",
        mail_confirm_password: "Confirm Password",
        mail_send_error_address: "The email address entered is invalid, doesn't exist or has been deleted.",
        mail_send_error_empty: "Mail object or text is empty.",
        mail_send_error_overflow: "Mail object or text exceeds the allowed size.",
        mail_answer: "Answer",

        addresses_desc: "Users should use caution when visiting listed domains, and we are not liable for any consequences.",
        addr_chatincognitonet_connect_title: "Temporary username:",
        addr_chatincognitonet_username: "Username",
        addr_chatincognitonet_connect: "Connect",
        addr_chatincognitonet_connect_taken: "Username already used",
        addr_chatincognitonet_send: "Send",
        addr_chatincognitonet_msg_placeholder: "message... (255 char.)",
        addr_chatincognitonet_left: "left the chat.",
        addr_selldata_title: "Sell data",
        addr_selldata_path: "Path to data...",
        addr_selldata_sell: "Sell",
        addr_selldata_bad: "The data doesn't exist at this path or can't access to the path.",
        addr_selldata_sold: "Data sold for ${1}.",
    },
    FR: {
        os_lang: "Français",
        os_language: "Langage",
        os_language_selection: "Sélectionnez la langue à définir pour le système.",
        os_cancel: "Annuler",
        os_close: "Fermer",
        os_boot: "Démarrage...",
        os_shutdown: "Arrêter",
        os_shuttingdown: "Arrêt en cours...",
        os_shutdown_confirmation: "Vous êtes sur le point d'éteindre l'ordinateur, êtes-vous sûr ?",
        os_shutdown_forced: "Arrêt forcé (trop loin de la position d'ouverture)...",
        os_error: "Erreur",
        os_fake_error: "Erreur inconnue : impossible d'ouvrir {1}.exe",
        os_session: "Initialisation d'une nouvelle session...",
        os_refresh: "Rafraîchir",
        os_create: "Créer",
        os_delete: "Supprimer",
        os_title: "Titre",
        os_description: "Description",

        date_format: "fr-FR",

        cmd_unknown: "Cette commande n'existe pas.<br>Essayez 'help' pour lister toutes les commandes disponibles.",
        cmd_help_desc: "afficher toutes les commandes disponibles.",
        cmd_version_desc: "afficher la version actuelle.",
        cmd_clear_desc: "effacer la sortie de la console.",
        cmd_exit_desc: "quitter l'invite de commande.",
        cmd_shutdown_desc: "éteindre l'ordinateur.",
        cmd_start_desc: "démarrer une application.<br>    Usage: start [app]",
        cmd_started: "L'application '{1}.exe' a été démarrée.",
        cmd_start_error: "Application inconnue '{1}.exe'",
        cmd_start_not_specified: "Vous devez spécifier une application.<br>    Usage: start [app]",
        cmd_start_already: "L'application '{1}.exe' est déjà en cours d'exécution.",
        cmd_taskkill_desc: "tuer une application.<br>    Usage: taskkill [app]",
        cmd_taskkilled: "L'application '{1}.exe' a été tuée.",
        cmd_taskkill_error: "L'application '{1}.exe' n'est pas en cours d'exécution.",
        cmd_taskkill_not_specified: "Vous devez spécifier une application.<br>    Usage: taskkill [app]",
        cmd_iptracer_desc: "obtenir des informations sur l'adresse IP spécifiée.<br>    Usage: ip-tracer [IPv4]",
        cmd_iptracer_not_specified: "Vous devez spécifier une adresse IP.<br>    Usage: ip-tracer [IPv4]",
        cmd_iptracer_error: "L'adresse IP est incorrecte, elle doit ressembler à 11.22.33.44.",
        cmd_iptracer_result: `adresse IP > <span style='color:green'>{1}</span>
        <br>Date & Heure > <span style='color:green'>{2}</span>
        <br>Zone > <span style='color:green'>{3}</span>
        <br>Latitude > <span style='color:green'>{4}</span>
        <br>Longitude > <span style='color:green'>{5}</span>
        <br>Position > <span style='color:green'>{6}</span>
        <br><span style='color:red'>GPS réglé.</span>`,
        cmd_iptracer_disconnected: "L'adresse IP {1} est <span style='color:red'>déconnectée</span> du réseau.",
        cmd_netscan_desc: "scanner le réseau.",
        cmd_connect_desc: "accéder au domaine.<br>    Usage: connect [domaine]",
        cmd_connect_not_specified: "Vous devez spécifier un nom de domaine.<br>    Usage: connect [domaine]",
        cmd_connect_unknown: "Nom de domaine inconnu.",
        cmd_connect_success: "Connecté avec succès à <span style='color:green'>{1}</span>.",

        error_market_title: "Erreur de création du poste",
        error_market_deletion_title: "Erreur de suppression",
        error_market_empty_arg: "Le titre ou la description est vide.",
        error_market_arg_overflow: "Le titre ou la description dépasse la taille autorisée.",
        error_market_delay: "Attendez entre chaque poste.",
        error_market_max: "Vous avez atteint le maximum de postes.",
        error_market_id: "L'ID est invalide.",
        error_market_id_not_yours: "Cette ID n'est pas l'une de vos postes.",
        info_market_creation_success: "Créé avec succès !",
        info_market_creation_success_desc: "Le poste à été créé avec succès.\nRafraîchissez le market.",
        info_market_deletion_success: "Supprimé avec succès !",
        info_market_deletion_success_desc: "Le poste à été supprimé avec succès.\nRafraîchissez le market.",
        market_yours: "le vôtre",
        market_post: "Poster",

        info_ipv4: "IPv4 :",
        info_type: "Type d'ordinateur:",
        info_desktop: "Fixe",
        info_laptop: "Portable",

        market_description: "Vous pouvez créer un poste toutes les {1} secondes, vous pouvez créer au maximum {2} postes. Chaque poste sera actif pour {3} jours.",

        mail_signin: "S'identifier",
        mail_signup: "S'inscrire",
        mail_save: "Sauvegarder les entrées pour la prochaine fois.",
        mail_preview: "Votre adresse mail sera {1}.",
        mail_passwords_different: "Les mots de passe sont différents.",
        mail_username_taken: "Ce nom d'utilisateur est déjà utilisé.",
        mail_account_created: "Compte créé !",
        mail_empty: "Le nom d'utilisateur et/ou le mot de passe ne peut pas être vide.",
        mail_input_overflow: "Le nom d'utilisateur ou le mot de passe dépasse la taille autorisée.",
        mail_password_empty: "Entrez un mot de passe.",
        mail_password_warning: "⚠️ ATTENTION : Ne mettez pas un vrai mot de passe !",
        mail_connect_wrong: "Le compte n'existe pas ou le nom d'utilisateur ou le mot de passe est incorrect.",
        mail_signout: "Se déconnecter",
        mail_create: "Nouveau mail",
        mail_unread: "NON LU",
        mail_object: "Objet du mail",
        mail_text: "Texte...",
        mail_send: "Envoyer",
        mail_new: "NOUVEAU",
        mail_signup_message: "Pas de compte ? S'inscrire",
        mail_signin_message: "Vous avez déjà un compte ? S'identifier",
        mail_username: "Nom d'utilisateur",
        mail_password: "Mot de passe",
        mail_confirm_password: "Confirmation Mot de passe",
        mail_send_error_address: "L'adresse e-mail saisie n'est pas valide, n'existe pas ou a été supprimée.",
        mail_send_error_empty: "L'objet ou le texte du mail est vide.",
        mail_send_error_overflow: "L'objet ou le texte du mail dépasse la taille autorisée.",
        mail_answer: "Répondre",

        addresses_desc: "Les utilisateurs doivent faire preuve de prudence lorsqu'ils visitent les domaines répertoriés, et nous ne sommes pas responsables des conséquences.",
        addr_chatincognitonet_connect_title: "Pseudo temporaire :",
        addr_chatincognitonet_username: "Pseudo",
        addr_chatincognitonet_connect: "Se connecter",
        addr_chatincognitonet_connect_taken: "Pseudo déjà utilisé",
        addr_chatincognitonet_send: "Envoyer",
        addr_chatincognitonet_msg_placeholder: "message... (255 caractères)",
        addr_chatincognitonet_left: "a quitté le chat.",
    },
}
