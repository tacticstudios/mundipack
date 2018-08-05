export default {
  en: {
    alerts: {
      backend: {
        users: {
          created: 'User created',
          updated: 'User updated',
          deleted: 'User deleted',
          bulk_destroyed: 'Selected users deleted',
          bulk_enabled: 'Selected users enabled',
          bulk_disabled: 'Selected users disabled'
        },
        roles: {
          created: 'Role created',
          updated: 'Role updated',
          deleted: 'Role deleted'
        },
        metas: {
          created: 'Meta created',
          updated: 'Meta updated',
          deleted: 'Meta deleted',
          bulk_destroyed: 'Selected metas deleted'
        },
        form_submissions: {
          deleted: 'Submission deleted',
          bulk_destroyed: 'Selected submissions deleted'
        },
        form_settings: {
          created: 'Form setting created',
          updated: 'Form setting updated',
          deleted: 'Form setting deleted'
        },
        redirections: {
          created: 'Redirection created',
          updated: 'Redirection updated',
          deleted: 'Redirection deleted',
          bulk_destroyed: 'Selected redirections deleted',
          bulk_enabled: 'Selected redirections enabled',
          bulk_disabled: 'Selected redirections disabled',
          file_imported: 'File successfully imported'
        },
        posts: {
          created: 'Post created',
          updated: 'Post updated',
          deleted: 'Post deleted',
          bulk_destroyed: 'Selected posts deleted',
          bulk_published: 'Selected posts published',
          bulk_pending: 'Selected posts are awaiting moderation',
          bulk_pinned: 'Selected posts pinned',
          bulk_promoted: 'Selected posts promoted'
        },
        packages: {
          created: 'Package created',
          updated: 'Package updated',
          deleted: 'Package deleted',
          bulk_destroyed: 'Selected packages deleted'
        },
        actions: {
          invalid: 'Invalid action'
        }
      },
      frontend: []
    },
    auth: {
      failed: 'These credentials do not match our records.',
      throttle:
        'Too many login attempts. Please try again in {seconds} seconds.'
    },
    buttons: {
      cancel: 'Cancel',
      save: 'Save',
      close: 'Close',
      create: 'Create',
      delete: 'Delete',
      confirm: 'Confirm',
      show: 'Show',
      edit: 'Edit',
      update: 'Update',
      view: 'View',
      preview: 'Preview',
      back: 'Back',
      send: 'Send',
      'login-as': 'Login as {name}',
      apply: 'Apply',
      users: {
        create: 'Create user'
      },
      roles: {
        create: 'Create role'
      },
      metas: {
        create: 'Create meta'
      },
      form_settings: {
        create: 'Create setting'
      },
      redirections: {
        create: 'Create redirection',
        import: 'Import CSV'
      },
      posts: {
        create: 'Create post',
        save_and_publish: 'Save and publish',
        save_as_draft: 'Save as draft'
      },
      packages: {
        create: 'Create package'
      }
    },
    exceptions: {
      general: 'Server exception',
      unauthorized: 'Action not allowed',
      backend: {
        users: {
          create: 'Error on user creation',
          update: 'Error on user updating',
          delete: 'Error on user deletion',
          first_user_cannot_be_edited: 'You cannot edit super admin user',
          first_user_cannot_be_disabled: 'Super admin user cannot be disabled',
          first_user_cannot_be_destroyed: 'Super admin user cannot be deleted',
          first_user_cannot_be_impersonated:
            'Super admin user cannot be impersonated',
          cannot_set_superior_roles:
            'You cannot attribute roles superior to yours'
        },
        roles: {
          create: 'Error on role creation',
          update: 'Error on role updating',
          delete: 'Error on role deletion'
        },
        metas: {
          create: 'Error on meta creation',
          update: 'Error on meta updating',
          delete: 'Error on meta deletion',
          already_exist: 'There is already a meta for this locale route'
        },
        form_submissions: {
          create: 'Error on submission creation',
          delete: 'Error on submission deletion'
        },
        form_settings: {
          create: 'Error on form setting creation',
          update: 'Error on form setting updating',
          delete: 'Error on form setting deletion',
          already_exist: 'There is already a setting linked to this form'
        },
        redirections: {
          create: 'Error on redirection creation',
          update: 'Error on redirection updating',
          delete: 'Error on redirection deletion',
          already_exist: 'There is already a redirection for this path'
        },
        posts: {
          create: 'Error on post creation',
          update: 'Error on post updating',
          save: 'Error on post saving',
          delete: 'Error on post deletion'
        },
        packages: {
          create: 'Error on package creation',
          update: 'Error on package updating',
          save: 'Error on package saving',
          delete: 'Error on package deletion'
        }
      },
      frontend: {
        user: {
          email_taken: 'That e-mail address is already taken.',
          password_mismatch: 'That is not your old password.',
          delete_account: 'Error on account deletion.',
          updating_disabled: 'Account editing is disabled.'
        },
        auth: {
          registration_disabled: 'Registration is disabled.'
        }
      }
    },
    forms: {
      contact: {
        display_name: 'Contact form'
      }
    },
    labels: {
      language: 'Language',
      actions: 'Actions',
      general: 'General',
      no_results: 'No results available',
      search: 'Search',
      validate: 'Validate',
      choose_file: 'Choose File',
      no_file_chosen: 'No file chosen',
      are_you_sure: 'Are you sure ?',
      delete_image: 'Delete image',
      yes: 'Yes',
      no: 'No',
      add_new: 'Add',
      export: 'Export',
      more_info: 'More info',
      author: 'Author',
      author_id: 'Author ID',
      last_access_at: 'Last access at',
      published_at: 'Published at',
      created_at: 'Created at',
      updated_at: 'Updated at',
      deleted_at: 'Deleted at',
      no_value: 'No value',
      upload_image: 'Upload image',
      anonymous: 'Anonymous',
      all_rights_reserved: 'All rights reserved.',
      with: 'with',
      by: 'by',
      datatables: {
        no_results: 'No results available',
        no_matched_results: 'No matched results available',
        show_per_page: 'Show',
        entries_per_page: 'entries per page',
        search: 'Search',
        infos: 'Showing {offset_start} to {offset_end} of {total} entries'
      },
      morphs: {
        post: 'Post, identity {id}',
        user: 'User, identity {id}'
      },
      auth: {
        disabled: 'Your account has been disabled.'
      },
      http: {
        '403': {
          title: 'Access Denied',
          description:
            'Sorry, but you do not have permissions to access this page.'
        },
        '404': {
          title: 'Page Not Found',
          description:
            'Sorry, but the page you were trying to view does not exist.'
        },
        '500': {
          title: 'Server Error',
          description:
            "Sorry, but the server has encountered a situation it doesn't know how to handle. We'll fix this as soon as possible."
        }
      },
      localization: {
        en: 'English',
        fr: 'French',
        es: 'Spanish'
      },
      placeholders: {
        route: 'Select a valid internal route',
        tags: 'Select or create a tag'
      },
      cookieconsent: {
        message:
          'This website uses cookies to ensure you get the best experience on our website.',
        dismiss: 'Got it !'
      },
      descriptions: {
        allowed_image_types: 'Allowed types: png gif jpg jpeg.'
      },
      user: {
        dashboard: 'Dashboard',
        remember: 'Remember',
        login: 'Login',
        logout: 'Logout',
        password_forgot: 'Forget password ?',
        send_password_link: 'Send reset password link',
        password_reset: 'Password Reset',
        register: 'Register',
        space: 'My space',
        settings: 'Settings',
        account: 'My account',
        profile: 'My profile',
        avatar: 'Avatar',
        online: 'Online',
        edit_profile: 'Edit my profile',
        change_password: 'Change my password',
        delete: 'Delete my account',
        administration: 'Administration',
        member_since: 'Member since {date}',
        profile_updated: 'Profile successfully updated.',
        password_updated: 'Password successfully updated.',
        email_confirmation_sended: 'Mail confirmation sended.',
        email_confirmed: 'Email successfully confirmed.',
        super_admin: 'Super administrateur',
        account_delete:
          '<p>This action will delete entirely your account from this site as well as all associated data.</p>',
        account_deleted: 'Account successfully deleted',
        titles: {
          space: 'My space',
          account: 'My account'
        }
      },
      alerts: {
        login_as:
          'You are actually logged as <strong>{name}</strong>, you can logout as <a href="{route}" data-turbolinks="false">{admin}</a>.',
        not_confirmed:
          'Your account will be in limited mode as long as your email remains not confirmed. <a href="{route}">Click here</a> in order to resend mail confirmation.'
      },
      backend: {
        dashboard: {
          new_posts: 'New posts',
          pending_posts: 'Pending posts',
          published_posts: 'Published posts',
          active_users: 'Active users',
          form_submissions: 'Submissions',
          last_posts: 'Last posts',
          last_published_posts: 'Last publications',
          last_pending_posts: 'Last pending posts',
          last_new_posts: 'Last new posts',
          all_posts: 'All posts'
        },
        new_menu: {
          post: 'New post',
          form_setting: 'New form setting',
          user: 'New user',
          role: 'New role',
          meta: 'New meta',
          redirection: 'New redirection'
        },
        sidebar: {
          content: 'Content management',
          forms: 'Form management',
          access: 'Access management',
          seo: 'SEO settings'
        },
        titles: {
          dashboard: 'Dashboard'
        },
        users: {
          titles: {
            main: 'User management',
            index: 'User list',
            create: 'User creation',
            edit: 'User modification'
          },
          actions: {
            destroy: 'Delete selected users',
            enable: 'Enable selected users',
            disable: 'Disable selected users'
          }
        },
        roles: {
          titles: {
            main: 'Role management',
            index: 'Role list',
            create: 'Role creation',
            edit: 'Role modification'
          }
        },
        metas: {
          titles: {
            main: 'Meta management',
            index: 'Meta list',
            create: 'Meta creation',
            edit: 'Meta modification'
          },
          actions: {
            destroy: 'Delete selected metas'
          }
        },
        form_submissions: {
          titles: {
            main: 'Submission management',
            index: 'Submission list',
            show: 'Submission detail'
          },
          actions: {
            destroy: 'Delete selected submissions'
          }
        },
        form_settings: {
          titles: {
            main: 'Form setting',
            index: 'Form setting list',
            create: 'Form setting creation',
            edit: 'Form setting modification'
          },
          descriptions: {
            recipients:
              "Example: 'webmaster@example.com' or 'sales@example.com,support@example.com' . To specify multiple recipients, separate each email address with a comma.",
            message:
              'The message to display to the user after submission of this form. Leave blank for no message.'
          }
        },
        redirections: {
          titles: {
            main: 'Redirection management',
            index: 'Redirection list',
            create: 'Redirection creation',
            edit: 'Redirection modification'
          },
          actions: {
            destroy: 'Delete selected redirections',
            enable: 'Enable selected redirections',
            disable: 'Disable selected redirections'
          },
          types: {
            permanent: 'Permanent redirect (301)',
            temporary: 'Temporary redirect (302)'
          },
          import: {
            title: 'CSV file import',
            label: 'Select CSV file to import',
            description:
              'File must have 2 columns with "source" and "target" as heading, redirection will be permanent by default'
          }
        },
        posts: {
          statuses: {
            draft: 'Draft',
            pending: 'Pending',
            published: 'Published'
          },
          titles: {
            main: 'Post management',
            index: 'Post list',
            create: 'Create post',
            edit: 'Edit post',
            publication: 'Publication options'
          },
          descriptions: {
            meta_title:
              "If leave empty, title will be that of article' title by default.",
            meta_description:
              "If leave empty, description will be that of article's summary by default."
          },
          placeholders: {
            body: 'Write your content...',
            meta_title: "Article's title.",
            meta_description: "Article's summary."
          },
          actions: {
            destroy: 'Delete selected posts',
            publish: 'Publish selected posts',
            pin: 'Pin selected posts',
            promote: 'Promote selected posts'
          }
        }
      },
      frontend: {
        titles: {
          home: 'Home',
          about: 'About',
          contact: 'Contact',
          blog: 'Blog',
          message_sent: 'Message sent',
          legal_mentions: 'Legal mentions',
          administration: 'Administration'
        },
        submissions: {
          message_sent: '<p>Your message has been successfully sent</p>'
        },
        placeholders: {
          locale: 'Select your language',
          timezone: 'Select your timezone'
        },
        blog: {
          published_at: 'Published at {date}',
          published_at_with_owner_linkable:
            'Published at {date} by <a href="{link}">{name}</a>',
          tags: 'Tags'
        }
      }
    },
    logs: {
      backend: {
        users: {
          created: 'User ID {user} created',
          updated: 'User ID {user} updated',
          deleted: 'User ID {user} deleted'
        },
        form_submissions: {
          created: 'Form submission ID {form_submission} created'
        }
      },
      frontend: []
    },
    mails: {
      layout: {
        hello: 'Hello !',
        regards: 'Regards',
        trouble:
          'If you’re having trouble clicking the {action} button, copy and paste the URL below into your web browser :',
        all_rights_reserved: 'All rights reserved.'
      },
      password_reset: {
        subject: 'Password reset',
        intro:
          'You are receiving this email because we received a password reset request for your account.',
        action: 'Reset Password',
        outro:
          'If you did not request a password reset, no further action is required.'
      },
      email_confirmation: {
        subject: 'Email confirmation',
        intro:
          'Email confirmation is required in order to unleash your account.',
        action: 'Confirm my email',
        outro:
          'Your account will be limited as long as your email remains not confirmed.'
      },
      contact: {
        subject: 'New contact message',
        new_contact: "You've got a new contact message. Submission detail :"
      },
      alert: {
        subject: '[{app_name}] Exception error',
        message:
          "You've got unexpected server exception error which message is : {message}.",
        trace: 'All trace detail :'
      }
    },
    pagination: {
      previous: '&laquo; Previous',
      next: 'Next &raquo;'
    },
    passwords: {
      password:
        'Passwords must be at least six characters and match the confirmation.',
      reset: 'Your password has been reset!',
      sent: 'We have e-mailed your password reset link!',
      token: 'This password reset token is invalid.',
      user: "We can't find a user with that e-mail address."
    },
    permissions: {
      categories: {
        blog: 'Blog',
        form: 'Forms',
        access: 'Access',
        seo: 'SEO'
      },
      access: {
        backend: {
          display_name: 'Backoffice access',
          description: 'Can access to administration pages.'
        }
      },
      view: {
        form_settings: {
          display_name: 'View form settings',
          description: 'Can view form settings.'
        },
        form_submissions: {
          display_name: 'View form submissions',
          description: 'Can view form submissions.'
        },
        users: {
          display_name: 'View users',
          description: 'Can view users.'
        },
        roles: {
          display_name: 'View roles',
          description: 'Can view roles.'
        },
        metas: {
          display_name: 'View metas',
          description: 'Can view metas.'
        },
        redirections: {
          display_name: 'View redirections',
          description: 'Can view redirections.'
        },
        posts: {
          display_name: 'View all posts',
          description: 'Can view all posts.'
        },
        own: {
          posts: {
            display_name: 'View own posts',
            description: 'Can view own posts.'
          }
        }
      },
      create: {
        form_settings: {
          display_name: 'Create form settings',
          description: 'Can create form settings.'
        },
        users: {
          display_name: 'Create users',
          description: 'Can create users.'
        },
        roles: {
          display_name: 'Create roles',
          description: 'Can create roles.'
        },
        metas: {
          display_name: 'Create metas',
          description: 'Can create metas.'
        },
        redirections: {
          display_name: 'Create redirections',
          description: 'Can create redirections.'
        },
        posts: {
          display_name: 'Create posts',
          description: 'Can create all posts.'
        }
      },
      edit: {
        form_settings: {
          display_name: 'Edit form settings',
          description: 'Can edit form settings.'
        },
        users: {
          display_name: 'Edit users',
          description: 'Can edit users.'
        },
        roles: {
          display_name: 'Edit roles',
          description: 'Can edit roles.'
        },
        metas: {
          display_name: 'Edit metas',
          description: 'Can edit metas.'
        },
        redirections: {
          display_name: 'Edit redirections',
          description: 'Can edit redirections.'
        },
        posts: {
          display_name: 'Edit all posts',
          description: 'Can edit all posts.'
        },
        own: {
          posts: {
            display_name: 'Edit own posts',
            description: 'Can edit own posts.'
          }
        }
      },
      delete: {
        form_settings: {
          display_name: 'Delete form settings',
          description: 'Can delete form settings.'
        },
        form_submissions: {
          display_name: 'Delete form submissions',
          description: 'Can delete form submissions.'
        },
        users: {
          display_name: 'Delete users',
          description: 'Can delete users.'
        },
        roles: {
          display_name: 'Delete roles',
          description: 'Can delete roles.'
        },
        metas: {
          display_name: 'Delete metas',
          description: 'Can delete metas.'
        },
        redirections: {
          display_name: 'Delete redirections',
          description: 'Can delete redirections.'
        },
        posts: {
          display_name: 'Delete all posts',
          description: 'Can delete all posts.'
        },
        own: {
          posts: {
            display_name: 'Delete own posts',
            description: 'Can delete own posts.'
          }
        }
      },
      publish: {
        posts: {
          display_name: 'Publish posts',
          description: 'Can manage posts publication.'
        }
      },
      impersonate: {
        display_name: 'Impersonate user',
        description:
          'Can take ownership of others user identities. Useful for tests.'
      }
    },
    routes: {
      home: 'home',
      about: 'about',
      contact: 'contact',
      'contact-sent': 'contact-sent',
      'legal-mentions': 'legal-mentions',
      redactors: 'blog/redactors/{user}'
    },
    validation: {
      accepted: 'The {attribute} must be accepted.',
      active_url: 'The {attribute} is not a valid URL.',
      after: 'The {attribute} must be a date after {date}.',
      after_or_equal:
        'The {attribute} must be a date after or equal to {date}.',
      alpha: 'The {attribute} may only contain letters.',
      alpha_dash:
        'The {attribute} may only contain letters, numbers, and dashes.',
      alpha_num: 'The {attribute} may only contain letters and numbers.',
      array: 'The {attribute} must be an array.',
      before: 'The {attribute} must be a date before {date}.',
      before_or_equal:
        'The {attribute} must be a date before or equal to {date}.',
      between: {
        numeric: 'The {attribute} must be between {min} and {max}.',
        file: 'The {attribute} must be between {min} and {max} kilobytes.',
        string: 'The {attribute} must be between {min} and {max} characters.',
        array: 'The {attribute} must have between {min} and {max} items.'
      },
      boolean: 'The {attribute} field must be true or false.',
      confirmed: 'The {attribute} confirmation does not match.',
      date: 'The {attribute} is not a valid date.',
      date_format: 'The {attribute} does not match the format {format}.',
      different: 'The {attribute} and {other} must be different.',
      digits: 'The {attribute} must be {digits} digits.',
      digits_between: 'The {attribute} must be between {min} and {max} digits.',
      dimensions: 'The {attribute} has invalid image dimensions.',
      distinct: 'The {attribute} field has a duplicate value.',
      email: 'The {attribute} must be a valid email address.',
      exists: 'The selected {attribute} is invalid.',
      file: 'The {attribute} must be a file.',
      filled: 'The {attribute} field must have a value.',
      image: 'The {attribute} must be an image.',
      in: 'The selected {attribute} is invalid.',
      in_array: 'The {attribute} field does not exist in {other}.',
      integer: 'The {attribute} must be an integer.',
      ip: 'The {attribute} must be a valid IP address.',
      ipv4: 'The {attribute} must be a valid IPv4 address.',
      ipv6: 'The {attribute} must be a valid IPv6 address.',
      json: 'The {attribute} must be a valid JSON string.',
      max: {
        numeric: 'The {attribute} may not be greater than {max}.',
        file: 'The {attribute} may not be greater than {max} kilobytes.',
        string: 'The {attribute} may not be greater than {max} characters.',
        array: 'The {attribute} may not have more than {max} items.'
      },
      mimes: 'The {attribute} must be a file of type: {values}.',
      mimetypes: 'The {attribute} must be a file of type: {values}.',
      min: {
        numeric: 'The {attribute} must be at least {min}.',
        file: 'The {attribute} must be at least {min} kilobytes.',
        string: 'The {attribute} must be at least {min} characters.',
        array: 'The {attribute} must have at least {min} items.'
      },
      not_in: 'The selected {attribute} is invalid.',
      not_regex: 'The {attribute} format is invalid.',
      numeric: 'The {attribute} must be a number.',
      present: 'The {attribute} field must be present.',
      regex: 'The {attribute} format is invalid.',
      required: 'The {attribute} field is required.',
      required_if: 'The {attribute} field is required when {other} is {value}.',
      required_unless:
        'The {attribute} field is required unless {other} is in {values}.',
      required_with:
        'The {attribute} field is required when {values} is present.',
      required_with_all:
        'The {attribute} field is required when {values} is present.',
      required_without:
        'The {attribute} field is required when {values} is not present.',
      required_without_all:
        'The {attribute} field is required when none of {values} are present.',
      same: 'The {attribute} and {other} must match.',
      size: {
        numeric: 'The {attribute} must be {size}.',
        file: 'The {attribute} must be {size} kilobytes.',
        string: 'The {attribute} must be {size} characters.',
        array: 'The {attribute} must contain {size} items.'
      },
      string: 'The {attribute} must be a string.',
      timezone: 'The {attribute} must be a valid zone.',
      unique: 'The {attribute} has already been taken.',
      uploaded: 'The {attribute} failed to upload.',
      url: 'The {attribute} format is invalid.',
      custom: {
        'attribute-name': {
          'rule-name': 'custom-message'
        }
      },
      attributes: {
        name: 'Name',
        display_name: 'Display name',
        username: 'Pseudo',
        email: 'Email',
        first_name: 'Firstname',
        last_name: 'Lastname',
        password: 'Password',
        password_confirmation: 'Confirm password',
        old_password: 'Old password',
        new_password: 'New password',
        new_password_confirmation: 'Confirm new password',
        postal_code: 'Postal code',
        city: 'City',
        country: 'Country',
        address: 'Address',
        phone: 'Phone',
        mobile: 'Mobile',
        age: 'Age',
        sex: 'Sex',
        gender: 'Gender',
        day: 'Day',
        month: 'Month',
        year: 'Year',
        hour: 'Hour',
        minute: 'Minute',
        second: 'Second',
        title: 'Title',
        content: 'Content',
        description: 'Description',
        summary: 'Summary',
        excerpt: 'Excerpt',
        date: 'Date',
        time: 'Time',
        available: 'Available',
        size: 'Size',
        roles: 'Roles',
        permissions: 'Permissions',
        active: 'Active',
        confirmed: 'Confirmed',
        message: 'Message',
        'g-recaptcha-response': 'Captcha',
        locale: 'Localization',
        route: 'Route',
        url: 'URL alias',
        form_type: 'Form type',
        form_data: 'Form data',
        recipients: 'Recipients',
        source_path: 'Original path',
        target_path: 'Target path',
        redirect_type: 'Redirect type',
        timezone: 'Timezone',
        order: 'Display order',
        image: 'Image',
        status: 'Status',
        pinned: 'Pinned',
        promoted: 'Promoted',
        body: 'Body',
        tags: 'Tags',
        published_at: 'Publish at',
        unpublished_at: 'Unpublish at',
        metable_type: 'Entity'
      }
    }
  },
  es: {
    alerts: {
      backend: {
        users: {
          created: 'Usuario creado',
          updated: 'Usuario actualizado',
          deleted: 'Usuario eliminado',
          bulk_destroyed: 'Usuarios seleccionados eliminados',
          bulk_enabled: 'Usuarios seleccionados habilitados',
          bulk_disabled: 'Usuarios seleccionados deshabilitados'
        },
        roles: {
          created: 'Rol creado',
          updated: 'Rol actualizado',
          deleted: 'Rol eliminado'
        },
        metas: {
          created: 'Meta creado',
          updated: 'Meta actualizado',
          deleted: 'Meta eliminado',
          bulk_destroyed: 'Metas seleccionadas eliminadas'
        },
        form_submissions: {
          deleted: 'Solicitud eliminada',
          bulk_destroyed: 'Solicitudes seleccionadas eliminadas'
        },
        form_settings: {
          created: 'Configuración de formulario creada',
          updated: 'Configuración de formulario actualizada',
          deleted: 'Configuración de formulario eliminada'
        },
        redirections: {
          created: 'Redirección creada',
          updated: 'Redirección actualizada',
          deleted: 'Redirección eliminada',
          bulk_destroyed: 'Redirecciones seleccionadas eliminadas',
          bulk_enabled: 'Redirecciones seleccionadas habilitadas',
          bulk_disabled: 'Redirecciones seleccionadas deshabilitadas',
          file_imported: 'Archivo importado con éxito'
        },
        posts: {
          created: 'Articulo creado',
          updated: 'Articulo actualizado',
          deleted: 'Articulo eliminado',
          bulk_destroyed: 'Artículos seleccionados eliminados',
          bulk_published: 'Artículos seleccionados publicados',
          bulk_pending: 'Los artículos seleccionados esperan moderación',
          bulk_pinned: 'Los artículos seleccionados fijadas',
          bulk_promoted: 'Los artículos seleccionados promocionados'
        },
        actions: {
          invalid: 'Acción no válida'
        }
      },
      frontend: []
    },
    auth: {
      failed: 'Estas credenciales no coinciden con nuestros registros.',
      throttle: 'Demasiados intentos de inicio de sesión. '
    },
    buttons: {
      cancel: 'Cancelar',
      save: 'Salvar',
      close: 'Cerrar',
      create: 'Crear',
      delete: 'Borrar',
      confirm: 'Confirmar',
      show: 'Mostrar',
      edit: 'Editar',
      update: 'Actualizar',
      view: 'Ver',
      preview: 'Previsualizar',
      back: 'Atras',
      send: 'Enviar',
      'login-as': 'Iniciar como {name}',
      apply: 'Aplicar',
      users: {
        create: 'Crear usuario'
      },
      roles: {
        create: 'Crear rol'
      },
      metas: {
        create: 'Crear meta'
      },
      form_settings: {
        create: 'Crear configuración'
      },
      redirections: {
        create: 'Crear redirección',
        import: 'Importar CSV'
      },
      posts: {
        create: 'Crear publicación',
        save_and_publish: 'Guardar y publicar',
        save_as_draft: 'Guardar como borrador'
      }
    },
    exceptions: {
      general: 'Excepción del servidor',
      unauthorized: 'Acción no permitida',
      backend: {
        users: {
          create: 'Error en la creación del usuario',
          update: 'Error en la actualización del usuario',
          delete: 'Error en la eliminación del usuario',
          first_user_cannot_be_edited:
            'No puedes editar el usuario súper administrador',
          first_user_cannot_be_disabled:
            'El usuario súper administrador no puede ser deshabilitado',
          first_user_cannot_be_destroyed:
            'El usuario súper administrador no puede ser eliminado',
          first_user_cannot_be_impersonated:
            'El usuario Super administrador no puede ser suplantado',
          cannot_set_superior_roles:
            'No puedes atribuir roles superiores a los tuyos'
        },
        roles: {
          create: 'Error en la creación de roles',
          update: 'Error en la actualización de roles',
          delete: 'Error en la eliminación de roles'
        },
        metas: {
          create: 'Error en la creación de la meta',
          update: 'Error en la actualización de la meta',
          delete: 'Error en la eliminación de la meta',
          already_exist:
            'Ya hay una meta para esta ruta de configuración regional'
        },
        form_submissions: {
          create: 'Error en la creación de la solicitud',
          delete: 'Error en la eliminación de la solicitud'
        },
        form_settings: {
          create: 'Error en la creación de configuración de formulario',
          update: 'Error en la actualización de configuración del formulario',
          delete: 'Error en la eliminación de configuración del formulario',
          already_exist: 'Ya hay una configuración vinculada a este formulario'
        },
        redirections: {
          create: 'Error en la creación de la redirección',
          update: 'Error en la actualización de la redirección',
          delete: 'Error en la eliminación de la redirección',
          already_exist: 'Ya hay una redirección para este camino'
        },
        posts: {
          create: 'Error en la creación del articulo',
          update: 'Error en la actualización del articulo',
          save: 'Error en la salvado del articulo',
          delete: 'Error en la eliminación del articulo'
        }
      },
      frontend: {
        user: {
          email_taken: 'Esa dirección de correo electrónico ya está es uso.',
          password_mismatch: 'Esa no es tu contraseña anterior.',
          delete_account: 'Error al eliminar la cuenta.',
          updating_disabled: 'La edición de cuenta está deshabilitada.'
        },
        auth: {
          registration_disabled: 'El registro está desactivado.'
        }
      }
    },
    forms: {
      contact: {
        display_name: 'Formulario de contacto'
      }
    },
    labels: {
      language: 'Idioma',
      actions: 'Acciones',
      general: 'General',
      no_results: 'No hay resultados disponibles',
      search: 'Buscar',
      validate: 'Validar',
      choose_file: 'Seleccione el archivo',
      no_file_chosen: 'Ningún archivo seleccionado',
      are_you_sure: 'Estás seguro ?',
      delete_image: 'Eliminar imagen',
      yes: 'Sí',
      no: 'No',
      add_new: 'Añadir',
      export: 'Exportar',
      more_info: 'Más información',
      author: 'Autor',
      author_id: 'Autor ID',
      last_access_at: 'Último acceso a',
      published_at: 'Publicado en',
      created_at: 'Creado en',
      updated_at: 'Actualizado en',
      deleted_at: 'Eliminado en',
      no_value: 'Sin valor',
      upload_image: 'Cargar imagen',
      anonymous: 'Anónimo',
      all_rights_reserved: 'Todos los derechos reservados.',
      with: 'con',
      by: 'por',
      datatables: {
        no_results: 'No hay resultados disponibles',
        no_matched_results: 'No hay resultados coincidentes disponibles',
        show_per_page: 'Mostrar',
        entries_per_page: 'entradas por página',
        search: 'Buscar',
        infos: 'Mostrando {offset_start} a {offset_end} de {total} entries'
      },
      morphs: {
        post: 'Articulo, identidad {id}',
        user: 'Usuario, identidad{id}'
      },
      auth: {
        disabled: 'Your account has been disabled.'
      },
      http: {
        '403': {
          title: 'Acceso denegado',
          description:
            'Lo sentimos, pero no tienes permisos para acceder a esta página.'
        },
        '404': {
          title: 'Página no encontrada',
          description:
            'Lo sentimos, pero la página que intentabas ver no existe.'
        },
        '500': {
          title: 'Error del Servidor',
          description:
            'Lo sentimos, pero el servidor ha encontrado una situación que no sabe cómo manejar. Arreglaremos esto lo antes posible.'
        }
      },
      localization: {
        en: 'Inglés',
        fr: 'Francés',
        es: 'Español'
      },
      placeholders: {
        route: 'Seleccione una ruta interna válida',
        tags: 'Seleccione o cree una etiqueta'
      },
      cookieconsent: {
        message:
          'Este sitio web utiliza cookies para garantizar que obtenga la mejor experiencia en nuestro sitio web.',
        dismiss: 'Estoy de acuerdo !'
      },
      descriptions: {
        allowed_image_types: 'Tipos permitidos: png gif jpg jpeg.'
      },
      user: {
        dashboard: 'Controles',
        remember: 'Recuerda',
        login: 'Iniciar sesión',
        logout: 'Cerrar sesión',
        password_forgot: 'Contraseña olvidada ?',
        send_password_link: 'Enviar enlace para restablecer contraseña',
        password_reset: 'Restablecimiento de contraseña',
        register: 'Registro',
        space: 'Mi espacio',
        settings: 'Settings',
        account: 'Mi cuenta',
        profile: 'Mi perfil',
        avatar: 'Avatar',
        online: 'En línea',
        edit_profile: 'Editar mi perfil',
        change_password: 'Cambiar mi contraseña',
        delete: 'Borrar mi cuenta',
        administration: 'Administración',
        member_since: 'Miembro desde {date}',
        profile_updated: 'Perfil actualizado con éxito.',
        password_updated: 'Contraseña actualizada con éxito.',
        email_confirmation_sended: 'Correo de confirmación enviado.',
        email_confirmed: 'Correo electrónico confirmado con éxito.',
        super_admin: 'Súper administrador',
        account_delete:
          '<p>Esta acción eliminará por completo su cuenta de este sitio, así como todos los datos asociados.</p>',
        account_deleted: 'Cuenta eliminada con éxito',
        titles: {
          space: 'Mi espacio',
          account: 'Mi cuenta'
        }
      },
      alerts: {
        login_as:
          'Actualmente as iniciado session como <strong>{name}</strong>, puedes cerrar sesión como <a href="{route}" data-turbolinks="false">{admin}</a>.',
        not_confirmed:
          'Su cuenta estará en modo limitado mientras su correo electrónico no esté confirmado. <a href="{route}">Haga clic aquí</a> para volver a enviar la confirmación del correo.'
      },
      backend: {
        dashboard: {
          new_posts: 'Artículos nuevos',
          pending_posts: 'Artículos pendientes',
          published_posts: 'Artículos Publicados',
          active_users: 'Usuarios activos',
          form_submissions: 'Solicitudes',
          last_posts: 'Últimos artículos',
          last_published_posts: 'Últimos artículos publicados',
          last_pending_posts: 'Últimos artículos pendientes',
          last_new_posts: 'Últimos artículos nuevos',
          all_posts: 'Todos los artículos'
        },
        new_menu: {
          post: 'Nuevo articulo',
          form_setting: 'Nueva configuración de formulario',
          user: 'Nuevo usuario',
          role: 'Nuevo rol',
          meta: 'Nueva meta',
          redirection: 'Nueva redirección'
        },
        sidebar: {
          content: 'Gestión de contenido',
          forms: 'Gestión de formularios',
          access: 'Gestión de Acceso',
          seo: 'Ajustes SEO'
        },
        titles: {
          dashboard: 'Controles'
        },
        users: {
          titles: {
            main: 'Gestión de usuarios',
            index: 'Lista de usuarios',
            create: 'Creación de usuario',
            edit: 'Modificación del usuario'
          },
          actions: {
            destroy: 'Eliminar usuarios seleccionados',
            enable: 'Habilitar usuarios seleccionados',
            disable: 'Desactivar usuarios seleccionados'
          }
        },
        roles: {
          titles: {
            main: 'Gestión de roles',
            index: 'Lista de roles',
            create: 'Creación de roles',
            edit: 'Modificación de roles'
          }
        },
        metas: {
          titles: {
            main: 'Meta gestión',
            index: 'Lista Meta',
            create: 'Creación de Meta',
            edit: 'Modificación de meta'
          },
          actions: {
            destroy: 'Eliminar metas seleccionadas'
          }
        },
        form_submissions: {
          titles: {
            main: 'Gestión de solicitudes',
            index: 'Lista de solicitudes',
            show: 'Detalle de solicitud'
          },
          actions: {
            destroy: 'Elimiar solicitudes seleccionadas'
          }
        },
        form_settings: {
          titles: {
            main: 'Configuración de formulario',
            index: 'Lista de configuración de formulario',
            create: 'Creación de configuración de formulario',
            edit: 'Modificación de configuración de formulario'
          },
          descriptions: {
            recipients:
              "Ejemplo: 'webmaster@example.com' o 'sales@example.com,support@example.com' . Para especificar múltiples destinatarios, separe cada dirección de correo electrónico con una coma.",
            message:
              'El mensaje para mostrar al usuario después del envío de este formulario. Dejar en blanco para ningún mensaje.'
          }
        },
        redirections: {
          titles: {
            main: 'Gestión de redirección',
            index: 'Lista de redirección',
            create: 'Creación de redirección',
            edit: 'Modificación de redirección'
          },
          actions: {
            destroy: 'Eliminar las redirecciones seleccionadas',
            enable: 'Habilitar redirecciones seleccionadas',
            disable: 'Deshabilitar redirecciones seleccionadas'
          },
          types: {
            permanent: 'Redirección permanente (301)',
            temporary: 'Redirección temporal (302)'
          },
          import: {
            title: 'Importación de archivo CSV',
            label: 'Seleccionar archivo CSV para importar',
            description:
              'El archivo debe tener 2 columnas con "source" y "target" como encabezado, la redirección será permanente por defecto'
          }
        },
        posts: {
          statuses: {
            draft: 'Borrador',
            pending: 'Pendiente',
            published: 'Publicado'
          },
          titles: {
            main: 'Gestión de artículos',
            index: 'Lista de artículos',
            create: 'Crear articulo',
            edit: 'Editar articulo',
            publication: 'Opciones de publicación'
          },
          descriptions: {
            meta_title:
              "If leave empty, title will be that of article' title by default.",
            meta_description:
              "If leave empty, description will be that of article's summary by default."
          },
          placeholders: {
            body: 'Escribe tu contenido...',
            meta_title: 'Título del articulo.',
            meta_description: 'Resumen del articulo.'
          },
          actions: {
            destroy: 'Eliminar artículos seleccionados',
            publish: 'Publicar artículos seleccionados',
            pin: 'Fijar artículos seleccionados',
            promote: 'Promover artículos seleccionados'
          }
        }
      },
      frontend: {
        titles: {
          home: 'Inicio',
          about: 'Acerca de',
          contact: 'Contacto',
          blog: 'Blog',
          message_sent: 'Mensaje enviado',
          legal_mentions: 'Menciones legales',
          administration: 'Administración'
        },
        submissions: {
          message_sent: '<p>Su mensaje ha sido enviado con éxito</p>'
        },
        placeholders: {
          locale: 'Selecciona tu idioma',
          timezone: 'Selecciona tu zona horaria'
        },
        blog: {
          published_at: 'Publicado en {date}',
          published_at_with_owner_linkable:
            'Publicado en {date} por <a href="{link}">{name}</a>',
          tags: 'Etiquetas'
        }
      }
    },
    logs: {
      backend: {
        users: {
          created: 'Usuario ID {user} creado',
          updated: 'Usuario ID {user} actualizado',
          deleted: 'Usuario ID {user} borrado'
        },
        form_submissions: {
          created: 'ID de formulario de solicitud {form_submission} creado'
        }
      },
      frontend: []
    },
    mails: {
      layout: {
        hello: 'Hola !',
        regards: 'Saludos',
        trouble:
          'Si tiene problemas para hacer clic en botón {action}, copie y pegue la siguiente URL en su navegador web :',
        all_rights_reserved: 'Todos los derechos reservados.'
      },
      password_reset: {
        subject: 'Restablecimiento de contraseña',
        intro:
          'Recibió este correo electrónico porque recibimos una solicitud de restablecimiento de contraseña para su cuenta.',
        action: 'Restablecer la contraseña',
        outro:
          'Si no solicitó un restablecimiento de contraseña, no se requiere ninguna acción adicional.'
      },
      email_confirmation: {
        subject: 'Confirmación de correo electrónico',
        intro:
          'Se requiere confirmación por correo electrónico para activar su cuenta.',
        action: 'Confirma mi correo',
        outro:
          'Su cuenta estará limitada hasta que su correo electrónico de confirmación no se confirme.'
      },
      contact: {
        subject: 'Nuevo mensaje de contacto',
        new_contact:
          'Tienes un nuevo mensaje de contacto. Detalle de presentación :'
      },
      alert: {
        subject: '[{app_name}] Error de excepción',
        message:
          'Tienes un error de excepción del servidor inesperado, que es el mensaje : {message}.',
        trace: 'Todos los detalles de rastreo :'
      }
    },
    pagination: {
      previous: '&laquo; Anterior',
      next: 'Siguiente &raquo;'
    },
    passwords: {
      password:
        'Las contraseñas deben coincidir y contener al menos 6 caracteres',
      reset: '¡Tu contraseña ha sido restablecida!',
      sent:
        '¡Te hemos enviado por correo el enlace para restablecer tu contraseña!',
      token: 'El token de recuperación de contraseña es inválido.',
      user: 'No podemos encontrar ningún usuario con ese correo electrónico.'
    },
    permissions: {
      categories: {
        blog: 'Blog',
        form: 'Formularios',
        access: 'Acceso',
        seo: 'SEO'
      },
      access: {
        backend: {
          display_name: 'Acceso Backoffice',
          description: 'Puede acceder a las páginas de administración.'
        }
      },
      view: {
        form_settings: {
          display_name: 'Ver configuración de formulario',
          description: 'Puede ver la configuración del formulario.'
        },
        form_submissions: {
          display_name: 'Ver formularios de solicitud',
          description: 'Puede ver formularios de solicitud.'
        },
        users: {
          display_name: 'Ver usuarios',
          description: 'Puede ver a los usuarios.'
        },
        roles: {
          display_name: 'Ver roles',
          description: 'Puede ver roles.'
        },
        metas: {
          display_name: 'Ver metas',
          description: 'Puede ver metas'
        },
        redirections: {
          display_name: 'Ver redirecciones',
          description: 'Puede ver las redirecciones.'
        },
        posts: {
          display_name: 'Ver todos los artículos',
          description: 'Puede ver todos los artículos.'
        },
        own: {
          posts: {
            display_name: 'Ver artículos propios',
            description: 'Puede ver artículos propios'
          }
        }
      },
      create: {
        form_settings: {
          display_name: 'Crear configuraciones de formulario',
          description: 'Puede crear configuraciones de formulario.'
        },
        users: {
          display_name: 'Crear usuarios',
          description: 'Puede crear usuarios.'
        },
        roles: {
          display_name: 'Crear roles',
          description: 'Puede crear roles.'
        },
        metas: {
          display_name: 'Crear metas',
          description: 'Puede crear metas.'
        },
        redirections: {
          display_name: 'Crear redirecciones',
          description: 'Puede crear redirecciones.'
        },
        posts: {
          display_name: 'Crear publicaciones',
          description: 'Puede crear todas las publicaciones.'
        }
      },
      edit: {
        form_settings: {
          display_name: 'Editar configuración de formulario',
          description: 'Puede editar la configuración del formulario.'
        },
        users: {
          display_name: 'Editar usuarios',
          description: 'Puede editar usuarios.'
        },
        roles: {
          display_name: 'Editar roles',
          description: 'Puede editar roles.'
        },
        metas: {
          display_name: 'Editar metas',
          description: 'Puede editar metas.'
        },
        redirections: {
          display_name: 'Editar redirecciones',
          description: 'Can edit redirections.'
        },
        posts: {
          display_name: 'Editar todos los artículos',
          description: 'Puede editar todos los artículos.'
        },
        own: {
          posts: {
            display_name: 'Editar artículos propias',
            description: 'Puede editar artículos propios.'
          }
        }
      },
      delete: {
        form_settings: {
          display_name: 'Eliminar configuración de formulario',
          description: 'Puede eliminar la configuración del formulario.'
        },
        form_submissions: {
          display_name: 'Eliminar formularios de solicitud',
          description: 'Puede eliminar formularios de solicitud.'
        },
        users: {
          display_name: 'Eliminar usuarios',
          description: 'Puede eliminar usuarios'
        },
        roles: {
          display_name: 'Eliminar roles',
          description: 'Puede eliminar roles'
        },
        metas: {
          display_name: 'Eliminar metas',
          description: 'Puede eliminar metas'
        },
        redirections: {
          display_name: 'Eliminar redirecciones',
          description: 'Puede eliminar redirecciones.'
        },
        posts: {
          display_name: 'Eliminar todos los artículos',
          description: 'Puede eliminar todos los artículos.'
        },
        own: {
          posts: {
            display_name: 'Eliminar artículos propios',
            description: 'Puede eliminar artículos propios'
          }
        }
      },
      publish: {
        posts: {
          display_name: 'Publicar artículos',
          description: 'Puede gestionar la publicación de artículos.'
        }
      },
      impersonate: {
        display_name: 'Suplantar usuario',
        description:
          'Puede tomar posesión de otras identidades de usuario. Útil para las pruebas.'
      }
    },
    routes: {
      home: 'inicio',
      about: 'acerca',
      contact: 'contacto',
      'contact-sent': 'envio-contacto',
      'legal-mentions': 'menciones-legales',
      redactors: 'blog/redactores/{user}'
    },
    validation: {
      accepted: '{attribute} debe ser aceptado.',
      active_url: '{attribute} no es una URL válida.',
      after: '{attribute} debe ser una fecha posterior a {date}.',
      after_or_equal:
        '{attribute} debe ser una fecha posterior o igual a {date}.',
      alpha: '{attribute} sólo debe contener letras.',
      alpha_dash: '{attribute} sólo debe contener letras, números y guiones.',
      alpha_num: '{attribute} sólo debe contener letras y números.',
      array: '{attribute} debe ser un conjunto.',
      before: '{attribute} debe ser una fecha anterior a {date}.',
      before_or_equal:
        '{attribute} debe ser una fecha anterior o igual a {date}.',
      between: {
        numeric: '{attribute} tiene que estar entre {min} - {max}.',
        file: '{attribute} debe pesar entre {min} - {max} kilobytes.',
        string: '{attribute} tiene que tener entre {min} - {max} caracteres.',
        array: '{attribute} tiene que tener entre {min} - {max} ítems.'
      },
      boolean: 'El campo {attribute} debe tener un valor verdadero o falso.',
      confirmed: 'La confirmación de {attribute} no coincide.',
      date: '{attribute} no es una fecha válida.',
      date_format: '{attribute} no corresponde al formato {format}.',
      different: '{attribute} y {other} deben ser diferentes.',
      digits: '{attribute} debe tener {digits} dígitos.',
      digits_between: '{attribute} debe tener entre {min} y {max} dígitos.',
      dimensions: 'Las dimensiones de la imagen {attribute} no son válidas.',
      distinct: 'El campo {attribute} contiene un valor duplicado.',
      email: '{attribute} no es un correo válido',
      exists: '{attribute} es inválido.',
      file: 'El campo {attribute} debe ser un archivo.',
      filled: 'El campo {attribute} es obligatorio.',
      image: '{attribute} debe ser una imagen.',
      in: '{attribute} es inválido.',
      in_array: 'El campo {attribute} no existe en {other}.',
      integer: '{attribute} debe ser un número entero.',
      ip: '{attribute} debe ser una dirección IP válida.',
      ipv4: '{attribute} debe ser un dirección IPv4 válida',
      ipv6: '{attribute} debe ser un dirección IPv6 válida.',
      json: 'El campo {attribute} debe tener una cadena JSON válida.',
      max: {
        numeric: '{attribute} no debe ser mayor a {max}.',
        file: '{attribute} no debe ser mayor que {max} kilobytes.',
        string: '{attribute} no debe ser mayor que {max} caracteres.',
        array: '{attribute} no debe tener más de {max} elementos.'
      },
      mimes: '{attribute} debe ser un archivo con formato: {values}.',
      mimetypes: '{attribute} debe ser un archivo con formato: {values}.',
      min: {
        numeric: 'El tamaño de {attribute} debe ser de al menos {min}.',
        file: 'El tamaño de {attribute} debe ser de al menos {min} kilobytes.',
        string: '{attribute} debe contener al menos {min} caracteres.',
        array: '{attribute} debe tener al menos {min} elementos.'
      },
      not_in: '{attribute} es inválido.',
      not_regex: 'El formato del campo {attribute} no es válido.',
      numeric: '{attribute} debe ser numérico.',
      present: 'El campo {attribute} debe estar presente.',
      regex: 'El formato de {attribute} es inválido.',
      required: 'El campo {attribute} es obligatorio.',
      required_if:
        'El campo {attribute} es obligatorio cuando {other} es {value}.',
      required_unless:
        'El campo {attribute} es obligatorio a menos que {other} esté en {values}.',
      required_with:
        'El campo {attribute} es obligatorio cuando {values} está presente.',
      required_with_all:
        'El campo {attribute} es obligatorio cuando {values} está presente.',
      required_without:
        'El campo {attribute} es obligatorio cuando {values} no está presente.',
      required_without_all:
        'El campo {attribute} es obligatorio cuando ninguno de {values} estén presentes.',
      same: '{attribute} y {other} deben coincidir.',
      size: {
        numeric: 'El tamaño de {attribute} debe ser {size}.',
        file: 'El tamaño de {attribute} debe ser {size} kilobytes.',
        string: '{attribute} debe contener {size} caracteres.',
        array: '{attribute} debe contener {size} elementos.'
      },
      string: 'El campo {attribute} debe ser una cadena de caracteres.',
      timezone: 'El {attribute} debe ser una zona válida.',
      unique: '{attribute} ya ha sido registrado.',
      uploaded: 'Subir {attribute} ha fallado.',
      url: 'El formato {attribute} es inválido.',
      custom: {
        'attribute-name': {
          'rule-name': 'mensaje personalizado'
        }
      },
      attributes: {
        name: 'Nombre',
        display_name: 'Nombre para mostrar',
        username: 'Seudo',
        email: 'Email',
        first_name: 'Nombre',
        last_name: 'Apellidos',
        password: 'Contraseña',
        password_confirmation: 'Confirmar contraseña',
        old_password: 'Contraseña anterior',
        new_password: 'Nueva contraseña',
        new_password_confirmation: 'Confirmar nueva contraseña',
        postal_code: 'código postal',
        city: 'Ciudad',
        country: 'País',
        address: 'Dirección',
        phone: 'Teléfono',
        mobile: 'Móvil',
        age: 'Años',
        sex: 'Sexo',
        gender: 'Género',
        day: 'Día',
        month: 'Mes',
        year: 'Año',
        hour: 'Hora',
        minute: 'Minuto',
        second: 'Segundo',
        title: 'Título',
        content: 'Contenido',
        description: 'Descripción',
        summary: 'Resumen',
        excerpt: 'Extracto',
        date: 'Fecha',
        time: 'Hora',
        available: 'Disponible',
        size: 'Tamaño',
        roles: 'Roles',
        permissions: 'Permisos',
        active: 'Activo',
        confirmed: 'Confirmado',
        message: 'Mensaje',
        'g-recaptcha-response': 'Captcha',
        locale: 'Localización',
        route: 'Ruta',
        url: 'URL alias',
        form_type: 'Tipo de formulario',
        form_data: 'Datos de formulario',
        recipients: 'Destinatarios',
        source_path: 'Ruta original',
        target_path: 'Ruta de destino',
        redirect_type: 'Redirigir tipo',
        timezone: 'Zona horaria',
        order: 'Orden de visualización',
        image: 'Imagen',
        status: 'Estado',
        pinned: 'Fijado',
        promoted: 'Promovido',
        body: 'Cuerpo',
        tags: 'Etiquetas',
        published_at: 'Publicar en',
        unpublished_at: 'Anular publicación en',
        metable_type: 'Entidad'
      }
    }
  }
}
